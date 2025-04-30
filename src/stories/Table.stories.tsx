import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../lib/components/Table";

// Sample data for our stories
type User = {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  joined: string;
  status: "active" | "inactive" | "pending";
};

const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    company: "Acme Inc.",
    role: "Developer",
    joined: "2021-01-01",
    status: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    company: "Globex Corp",
    role: "Designer",
    joined: "2021-03-15",
    status: "active",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    company: "Umbrella Corp",
    role: "Manager",
    joined: "2020-11-20",
    status: "inactive",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah@example.com",
    company: "Stark Industries",
    role: "Product Owner",
    joined: "2022-02-10",
    status: "pending",
  },
  {
    id: "5",
    name: "Robert Chen",
    email: "robert@example.com",
    company: "Wayne Enterprises",
    role: "CTO",
    joined: "2021-07-22",
    status: "active",
  },
];

// Define columns
const columns = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
    cell: ({ row }: { row: User }) => (
      <div className="font-medium">{row.name}</div>
    ),
    enableSorting: true,
  },
  {
    id: "email",
    accessorKey: "email",
    header: "Email",
    cell: ({ row }: { row: User }) => <div>{row.email}</div>,
    enableSorting: true,
  },
  {
    id: "company",
    accessorKey: "company",
    header: "Company",
    cell: ({ row }: { row: User }) => <div>{row.company}</div>,
    enableSorting: true,
  },
  {
    id: "role",
    accessorKey: "role",
    header: "Role",
    cell: ({ row }: { row: User }) => <div>{row.role}</div>,
    enableSorting: true,
  },
  {
    id: "joined",
    accessorKey: "joined",
    header: "Joined",
    cell: ({ row }: { row: User }) => <div>{row.joined}</div>,
    enableSorting: true,
  },
  {
    id: "status",
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: { row: User }) => (
      <div>
        <span
          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
            row.status === "active"
              ? "bg-green-100 text-green-800"
              : row.status === "inactive"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}>
          {row.status}
        </span>
      </div>
    ),
    enableSorting: true,
  },
];

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    enableSorting: {
      control: "boolean",
    },
    enableColumnFilters: {
      control: "boolean",
    },
    enableGlobalFilter: {
      control: "boolean",
    },
    enablePagination: {
      control: "boolean",
    },
    enableColumnVisibility: {
      control: "boolean",
    },
    stickyHeader: {
      control: "boolean",
    },
    stickyFirstColumn: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    data: users,
    columns: columns,
    totalItems: users.length,
    initialPageSize: 5,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: columns,
    totalItems: 0,
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: columns,
    totalItems: 0,
    emptyStateTitle: "No users found",
    emptyStateDescription:
      "Try adding a new user or changing your search criteria.",
    emptyStateAction: {
      label: "Add User",
      onClick: () => alert("Add user clicked"),
    },
  },
};

export const WithGlobalFilter: Story = {
  args: {
    data: users,
    columns: columns,
    totalItems: users.length,
    enableGlobalFilter: true,
  },
};

export const WithoutPagination: Story = {
  args: {
    data: users,
    columns: columns,
    totalItems: users.length,
    enablePagination: false,
  },
};

export const WithCustomPageSizes: Story = {
  args: {
    data: users,
    columns: columns,
    totalItems: users.length,
    pageSizes: [3, 5, 10],
    initialPageSize: 3,
  },
};

export const WithInitialSorting: Story = {
  args: {
    data: users,
    columns: columns,
    totalItems: users.length,
    initialSorting: { id: "name", desc: true },
  },
};
