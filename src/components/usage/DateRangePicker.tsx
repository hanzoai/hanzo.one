import { Box, Button, XStack } from '@/gui'

import React from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface DateRangePickerProps {
  dateRange: {
    start: string;
    end: string;
  };
  onDateRangeChange: (dateRange: { start: string; end: string }) => void;
}

const DateRangePicker = ({ dateRange, onDateRangeChange }: DateRangePickerProps) => {
  const handlePrevious = () => {
    // This would normally calculate the previous date range
    // For now, we'll just update the display
    onDateRangeChange({
      start: "Mar 1",
      end: "Mar 6"
    });
  };

  const handleNext = () => {
    // This would normally calculate the next date range
    // For now, we'll just update the display
    onDateRangeChange({
      start: "Mar 9",
      end: "Mar 15"
    });
  };

  return (
    <XStack display="flex" alignItems="center" columnGap={8}>
      <Button 
        variant="outline" 
        size="sm" 
        borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
        onClick={handlePrevious}
      >
        <ChevronLeft size={16} />
      </Button>
      
      <Button 
        variant="outline"
        borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
      >
        <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Calendar size={16} /></Box>
        <span>{dateRange.start} - {dateRange.end}</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        borderColor="var(--neutral-700)" hoverStyle={{ backgroundColor: "var(--neutral-800)" }}
        onClick={handleNext}
      >
        <ChevronRight size={16} />
      </Button>
    </XStack>
  );
};

export default DateRangePicker;
