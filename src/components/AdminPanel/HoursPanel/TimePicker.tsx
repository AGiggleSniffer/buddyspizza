"use client";

import * as React from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TimePickerProps {
  value: string; // Expected format "HH:mm"
  day: string;
  disabled: boolean;
  onChange: (day: string, patch: string) => void;
}

export function TimePicker({ value, onChange, day, disabled }: TimePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  // Extract current hours and minutes from the value string
  const [currentHour, currentMinute] = value ? value.split(":") : ["12", "00"];

  // Generate 24 hours (00 to 23) and 60 minutes (00 to 59)
  const hours = Array.from({ length: 24 }, (_, i) =>
    String(i).padStart(2, "0"),
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0"),
  );

  const handleTimeChange = (type: "hour" | "minute", val: string) => {
    if (type === "hour") {
      onChange(day, `${val}:${currentMinute}`);
    } else {
      onChange(day, `${currentHour}:${val}`);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[150px] justify-start text-left font-mono font-normal"
        >
          <Clock className="text-muted-foreground mr-2 h-4 w-4" />
          {value || "Select time"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0" align="start">
        <div className="divide-border flex h-60 divide-x">
          {/* Hours Column */}
          <ScrollArea className="h-full w-full p-1">
            <div className="flex flex-col gap-1 pr-2">
              <div className="text-muted-foreground py-1 text-center text-[10px] font-semibold uppercase">
                Hour
              </div>
              {hours.map((hour) => (
                <Button
                  key={hour}
                  size="sm"
                  variant={currentHour === hour ? "default" : "ghost"}
                  className="w-full shrink-0 font-mono text-sm"
                  onClick={() => handleTimeChange("hour", hour)}
                >
                  {hour}
                </Button>
              ))}
            </div>
          </ScrollArea>

          {/* Minutes Column */}
          <ScrollArea className="h-full w-full p-1">
            <div className="flex flex-col gap-1 pr-2">
              <div className="text-muted-foreground py-1 text-center text-[10px] font-semibold uppercase">
                Min
              </div>
              {minutes.map((minute) => (
                <Button
                  key={minute}
                  size="sm"
                  variant={currentMinute === minute ? "default" : "ghost"}
                  className="w-full shrink-0 font-mono text-sm"
                  onClick={() => handleTimeChange("minute", minute)}
                >
                  {minute}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="bg-muted/50 border-border flex justify-end border-t p-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setIsOpen(false)}
          >
            Done
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
