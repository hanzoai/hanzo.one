import { Box, Button, H3, MotionBox, Paragraph, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Text, XStack, YStack, createAnimationVariant, curves } from '@/gui'
import React, { useState } from "react";
import { Download, Filter, Calendar, FileText } from "lucide-react";
import { motion } from "framer-motion";


const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

interface Invoice {
  id: string;
  date: string;
  dueDate: string;
  amount: string;
  status: "Paid" | "Due" | "Overdue" | "Processing";
}

const InvoicesList = () => {
  const [filter, setFilter] = useState("all");
  
  // Mock data for invoices
  const invoices: Invoice[] = [
    {
      id: "INV-20230301",
      date: "Mar 1, 2023",
      dueDate: "Mar 15, 2023",
      amount: "$20.00",
      status: "Paid"
    },
    {
      id: "INV-20230401",
      date: "Apr 1, 2023",
      dueDate: "Apr 15, 2023",
      amount: "$20.00",
      status: "Paid"
    },
    {
      id: "INV-20230501",
      date: "May 1, 2023",
      dueDate: "May 15, 2023",
      amount: "$25.00",
      status: "Paid"
    }
  ];

  const filteredInvoices = invoices.filter(invoice => {
    if (filter === "all") return true;
    return invoice.status.toLowerCase() === filter;
  });

  const statusColors = {
    Paid: "bg-green-900/30 text-green-400",
    Due: "bg-yellow-900/30 text-yellow-400",
    Overdue: "bg-red-900/30 text-red-400",
    Processing: "bg-blue-900/30 text-blue-400"
  };

  return (
    <MotionBox 
      variants={cardAnimation}
      borderRadius="var(--radius-xl)" borderWidth={1} borderColor="var(--neutral-800)" backgroundColor="rgb(0 0 0 / 0.6)" overflow="hidden"
    >
      <YStack padding={24} borderBottomWidth={1} borderColor="var(--neutral-800)" display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" gap={16} $sm={{ flexDirection: "row", alignItems: "center" }}>
        <XStack display="flex" alignItems="center" gap={12}>
          <Calendar size={20} color="var(--neutral-400)" />
          <Box rowGap={4}>
            <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500">Invoice History</H3>
            <Paragraph fontSize="var(--text-sm)" lineHeight="var(--leading-sm)" color="var(--neutral-400)">View and download past invoices</Paragraph>
          </Box>
        </XStack>
        
        <XStack display="flex" alignItems="center" gap={8}>
          <Button variant="outline" size="sm" borderColor="var(--neutral-700)" backgroundColor="var(--black)" hoverStyle={{ backgroundColor: "var(--neutral-900)" }}>
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Filter size={16} /></Box>
            Filter
          </Button>
          
          <Button backgroundColor="var(--white)" color="var(--pure-black)" hoverStyle={{ backgroundColor: "var(--neutral-200)" }}>
            <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Download size={16} /></Box>
            Export All
          </Button>
        </XStack>
      </YStack>
      
      {filteredInvoices.length > 0 ? (
        <Box overflowX="auto">
          <Table>
            <TableHeader backgroundColor="var(--black)">
              <TableRow borderBottomWidth={1} borderColor="var(--neutral-800)" hoverStyle={{ backgroundColor: "transparent" }}>
                <TableHead color="var(--neutral-400)" fontWeight="500" paddingVertical={12} paddingHorizontal={24}>Invoice</TableHead>
                <TableHead color="var(--neutral-400)" fontWeight="500" paddingVertical={12} paddingHorizontal={24}>Date</TableHead>
                <TableHead color="var(--neutral-400)" fontWeight="500" paddingVertical={12} paddingHorizontal={24}>Due Date</TableHead>
                <TableHead color="var(--neutral-400)" fontWeight="500" paddingVertical={12} paddingHorizontal={24}>Amount</TableHead>
                <TableHead color="var(--neutral-400)" fontWeight="500" paddingVertical={12} paddingHorizontal={24}>Status</TableHead>
                <TableHead textAlign="right" color="var(--neutral-400)" fontWeight="500" paddingVertical={12} paddingHorizontal={24}>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.map((invoice) => (
                <TableRow key={invoice.id} borderTopWidth={1} borderColor="var(--neutral-800)" hoverStyle={{ backgroundColor: "var(--surface-card)" }}>
                  <TableCell paddingVertical={16} paddingHorizontal={24}>{invoice.id}</TableCell>
                  <TableCell paddingVertical={16} paddingHorizontal={24}>{invoice.date}</TableCell>
                  <TableCell paddingVertical={16} paddingHorizontal={24}>{invoice.dueDate}</TableCell>
                  <TableCell paddingVertical={16} paddingHorizontal={24}>{invoice.amount}</TableCell>
                  <TableCell paddingVertical={16} paddingHorizontal={24}>
                    <Text display="inline-block" paddingHorizontal={8} paddingVertical={4} borderRadius="var(--radius-full)" fontSize="var(--text-xs)" lineHeight="var(--leading-xs)">
                      {invoice.status}
                    </Text>
                  </TableCell>
                  <TableCell paddingVertical={16} paddingHorizontal={24} textAlign="right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      color="var(--neutral-400)" hoverStyle={{ color: "var(--white)", backgroundColor: "var(--neutral-800)" }}
                    >
                      <Box render="span" display="inline-flex" alignItems="center" marginRight={8}><Download size={16} /></Box>
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      ) : (
        <Box paddingVertical={64} textAlign="center">
          <Box render="span" display="inline-flex" alignItems="center" marginHorizontal="auto" marginBottom={16}><FileText size={48} color="var(--neutral-600)" /></Box>
          <H3 fontSize="var(--text-xl)" lineHeight="var(--leading-xl)" fontWeight="500" marginBottom={8}>No Invoices Found</H3>
          <Paragraph color="var(--neutral-400)" maxWidth="28rem" marginHorizontal="auto">
            Once you start using our services, your invoices will appear here.
          </Paragraph>
        </Box>
      )}
    </MotionBox>
  );
};

export default InvoicesList;
