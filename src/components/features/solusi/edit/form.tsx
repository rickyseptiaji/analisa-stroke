"use client";

import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { solusiSchema } from "../../../../../lib/formSchema";

export default function SolusiEditForm({ solusiId }: { solusiId: string }) {
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  const [initialLoading, setInitialLoading] = useState(true);
  const [penyakitOptions, setPenyakitOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const form = useForm<z.infer<typeof solusiSchema>>({
    resolver: zodResolver(solusiSchema),
    defaultValues: {
      kd_penyakit: "",
      solusi: "",
    },
  });

  useEffect(() => {
    async function loadAll() {
      try {
        const resP = await fetch("/api/penyakit");
        const penyakit = await resP.json();
        const options = penyakit.map((item: any) => ({
          value: item.kd_penyakit,
          label: item.nama_penyakit,
        }));
        setPenyakitOptions(options);

        const resS = await fetch(`/api/solusi/${solusiId}`);
        const solusi = await resS.json();

        form.reset({
          kd_penyakit: solusi.kd_penyakit,
          solusi: solusi.solusi,
        });
      } catch (error) {
        console.log("error", error);
      } finally {
        setInitialLoading(false);
      }
    }
    loadAll();
  }, []);
  async function onSubmit(values: z.infer<typeof solusiSchema>) {
    const { kd_penyakit, solusi } = values;
    try {
      setIsloading(true);
      const res = await fetch(`/api/solusi/${solusiId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kd_penyakit,
          solusi,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        return;
      }
      form.reset();
      toast.success(data.message);
      router.push("solusi");
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsloading(false);
    }
  }

  if (initialLoading)
    return (
      <div className="flex h-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="kd_penyakit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kode Penyakit</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Pilih Kode Penyakit" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {penyakitOptions.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.value}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="solusi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Solusi</FormLabel>
                <FormControl>
                  <Textarea placeholder="Masukkan solusi" {...field} />
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
