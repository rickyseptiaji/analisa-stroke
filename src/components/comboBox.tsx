import * as React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { ChevronsUpDownIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { LoadingSpinner } from "./LoadingSpinner";

type ComboboxProps = {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  onSearch?: (query: string) => void;
  loading?: boolean;
};

export function Combobox({
  value,
  onChange,
  options,
  onSearch,
  loading = false,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[250px] justify-between">
          {selected ? selected.label : "Pilih"}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput
            placeholder="Cari"
            onValueChange={(q) => onSearch && onSearch(q)}
          />
          <CommandList>
            {loading ? (
              <div className="flex items-center gap-2 p-2 text-sm text-gray-500">
                <LoadingSpinner className="w-4 h-4" />
                <span>Mencari...</span>
              </div>
            ) : options.length === 0 ? (
              <CommandEmpty>Tidak ada data.</CommandEmpty>
            ) : (
              <CommandGroup>
                {options.map((opt) => (
                  <CommandItem
                    key={opt.value}
                    value={opt.value}
                    onSelect={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === opt.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {opt.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
