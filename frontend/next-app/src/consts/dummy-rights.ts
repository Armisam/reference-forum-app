export const PERMISSIONS = [
    { bit: 1 << 0, label: "Read" },
    { bit: 1 << 1, label: "Comment" },
    { bit: 1 << 2, label: "Add Topic" },
    { bit: 1 << 3, label: "Delete User" },
];

export const roles = [
    {
        name: "Admin",
        permissions: 0b1111,
    },
    {
        name: "Normal User",
        permissions: 0b0111,
    },
    {
        name: "Guest User",
        permissions: 0b0001,
    },
];