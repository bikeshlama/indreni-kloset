
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProductFiltersProps {
  onFilter: (filters: {
    search: string;
    category: string;
    sortBy: string;
    priceRange: [number, number];
    size: string;
  }) => void;
}

const ProductFilters = ({ onFilter }: ProductFiltersProps) => {
  const isMobile = useIsMobile();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    sortBy: "newest",
    priceRange: [0, 1000] as [number, number],
    size: "all",
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    applyFilters(e.target.value, filters);
  };

  const handleFilterChange = (name: string, value: string | [number, number]) => {
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    applyFilters(search, updatedFilters);
  };

  const applyFilters = (
    searchTerm: string,
    currentFilters: typeof filters
  ) => {
    onFilter({
      search: searchTerm,
      ...currentFilters,
    });
  };

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "tops", label: "Tops" },
    { value: "dresses", label: "Dresses" },
    { value: "pants", label: "Pants" },
    { value: "outerwear", label: "Outerwear" },
    { value: "accessories", label: "Accessories" },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "popular", label: "Most Popular" },
  ];

  const sizes = [
    { value: "all", label: "All Sizes" },
    { value: "xs", label: "XS" },
    { value: "s", label: "S" },
    { value: "m", label: "M" },
    { value: "l", label: "L" },
    { value: "xl", label: "XL" },
    { value: "xxl", label: "XXL" },
  ];

  const renderFilters = () => (
    <div className="space-y-4">
      <div>
        <label className="font-medium text-sm">Category</label>
        <Select
          value={filters.category}
          onValueChange={(value) => handleFilterChange("category", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="font-medium text-sm">Size</label>
        <Select
          value={filters.size}
          onValueChange={(value) => handleFilterChange("size", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((size) => (
              <SelectItem key={size.value} value={size.value}>
                {size.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="font-medium text-sm">Sort By</label>
        <Select
          value={filters.sortBy}
          onValueChange={(value) => handleFilterChange("sortBy", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 sticky top-0 z-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search products..."
            className="pl-9"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                {renderFilters()}
              </div>
              <SheetFooter>
                <Button className="w-full bg-navy hover:bg-navy/90">Apply Filters</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex-shrink-0 flex items-center gap-4">
            <Select
              value={filters.category}
              onValueChange={(value) => handleFilterChange("category", value)}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select
              value={filters.sortBy}
              onValueChange={(value) => handleFilterChange("sortBy", value)}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;
