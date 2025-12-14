import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
const formSchema = z.object({
  kd_penyakit: z.string().min(3, {
    message: "kode penyakit must be at least 3 characters.",
  }),
  nama_penyakit: z.string().min(5, {
    message: "nama penyakit must be at least 5 characters.",
  }),
});
export default function PenyakitEditForm({
  penyakitId,
}: {
  penyakitId: string;
}) {
  const [isLoading, setIsloading] = useState(false);
  const [dataPenyakit, setDataPenyakit] = useState(true);
  async function fetchPenyakit() {
    setDataPenyakit(true);
    try {
      const res = await fetch(`/api/penyakit/${penyakitId}`);
      const data = await res.json();
      form.reset({
        kd_penyakit: data.kd_penyakit,
        nama_penyakit: data.nama_penyakit,
      });
    } catch (error) {
      console.log("error", error);
    } finally {
      setDataPenyakit(false);
    }
  }

  useEffect(() => {
    fetchPenyakit();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kd_penyakit: "",
      nama_penyakit: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { kd_penyakit, nama_penyakit } = values;
    try {
      setIsloading(true);
      const res = await fetch(`/api/penyakit/${penyakitId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kd_penyakit,
          nama_penyakit,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      }
      form.reset();
      toast.success(data.message);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsloading(false);
    }
  }

  if (dataPenyakit) {
    return (
      <div className="flex h-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="kd_penyakit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kode Penyakit</FormLabel>
              <FormControl>
                <Input placeholder="Kode Penyakit" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nama_penyakit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Penyakit</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Nama Penyakit" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="ringan">Stroke Ringan</SelectItem>
                    <SelectItem value="sedang">Stroke Sedang</SelectItem>
                    <SelectItem value="berat">Stroke Berat</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
  );
}
