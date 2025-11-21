"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUp, ArrowDown } from "lucide-react";

const fetchData = async () => {
  const res = await fetch(
    "https://fakerapi.it/api/v2/books?_quantity=60&_locale=en_IN&_seed=1"
  );
  const data = await res.json();
  return data.data;
};

export default function AdvanceTablePage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) =>
    sortOrder === "asc"
      ? a[sortField].localeCompare(b[sortField])
      : b[sortField].localeCompare(a[sortField])
  );

  const filteredData = sortedData.filter((item) =>
    item.author.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (page - 1) * perPage,
    page * perPage
  );
  const totalPages = Math.ceil(filteredData.length / perPage);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex justify-between mb-4 gap-4">
        <Input
          type="text"
          placeholder="Search by Author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
        <Select onValueChange={(value) => setPerPage(Number(value))}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="5" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="25">25</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S.No</TableHead>
            {["title", "author", "genre"].map((field) => (
              <TableHead
                key={field}
                onClick={() => toggleSort(field)}
                className="cursor-pointer select-none "
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                {sortField === field &&
                  (sortOrder === "asc" ? (
                    <ArrowUp size={15} />
                  ) : (
                    <ArrowDown size={15} />
                  ))}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{(page - 1) * perPage + index + 1}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.author}</TableCell>
              <TableCell>{item.genre}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between mt-4">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <span>
          Page {page} of {totalPages}
        </span>
        <Button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
