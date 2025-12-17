import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  nik: z
    .string()
    .regex(/^\d+$/, { message: "NIK hanya boleh berisi angka." })
    .length(16, { message: "NIK harus terdiri dari 16 digit." }),
  nama_lengkap: z.string().min(2, {
    message: "Nama must be at least 2 characters.",
  }),
  umur: z.coerce.number().min(1, { message: "Umur must be at least 1 digit." }),
  alamat: z.string().min(5, {
    message: "Alamat must be at least 5 characters.",
  }),
  jenis_kelamin: z.string(),
  phone: z.string().min(10, {
    message: "Phone must be at least 10 characters.",
  }),
  tanggal_lahir: z.date({
    errorMap: () => ({ message: "Tanggal Lahir is required." }),
  }),
});

export default function PasienEditForm({ pasienId }: { pasienId: string }) {
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  const [dataPasien, setDataPasien] = useState(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nik: "",
      nama_lengkap: "",
      umur: undefined,
      alamat: "",
      jenis_kelamin: "",
      phone: "",
      tanggal_lahir: undefined,
    },
  });

  async function fetchPasien() {
    try {
      setDataPasien(true);
      const res = await fetch(`/api/pasien/${pasienId}`);
      const data = await res.json();

      form.reset({
        nik: data.nik,
        nama_lengkap: data.nama_lengkap,
        umur: data.umur,
        alamat: data.alamat,
        jenis_kelamin: data.jenis_kelamin,
        phone: data.phone,
        tanggal_lahir: data.tanggal_lahir
          ? new Date(data.tanggal_lahir)
          : undefined,
      });
    } catch (error) {
      console.log("error", error);
    } finally {
      setDataPasien(false);
    }
  }

  useEffect(() => {
    fetchPasien();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const {
      nik,
      nama_lengkap,
      umur,
      alamat,
      jenis_kelamin,
      phone,
      tanggal_lahir,
    } = values;
    try {
      setIsloading(true);
      const res = await fetch(`/api/pasien/${pasienId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nik,
          nama_lengkap,
          umur,
          alamat,
          jenis_kelamin,
          phone,
          tanggal_lahir,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        return;
      }
      form.reset();
      toast.success(data.message);
      router.push("/pasien");
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }

  if (dataPasien) {
    return (
      <div className="flex h-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="nik"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NIK</FormLabel>
                <FormControl>
                  <Input placeholder="NIK" maxLength={16} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nama_lengkap"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Lengkap</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Lengkap" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tanggal_lahir"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tanggal Lahir</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      {field.value
                        ? field.value.toLocaleDateString()
                        : "Pilih Tanggal"}
                      <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="umur"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Umur</FormLabel>
                <FormControl>
                  <Input placeholder="Umur" {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jenis_kelamin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jenis Kelamin</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Jenis Kelamin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="L">Laki-laki</SelectItem>
                      <SelectItem value="P">Perempuan</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>No HP</FormLabel>
                <FormControl>
                  <Input placeholder="No HP" {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alamat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat</FormLabel>
                <FormControl>
                  <Textarea placeholder="Masukkan alamat lengkap" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <LoadingSpinner className="w-4 h-4" />
                <span>Menyimpan...</span>
              </div>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
