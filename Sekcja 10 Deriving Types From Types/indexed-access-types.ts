// const appUser = {
//     name: "John",
//     age: 30,
//     permissions: [
//         {
//             id: "1",
//             title: "Admin",
//             description: "Has full access"
//         }
//     ]
// };

// type AppUser = typeof appUser;

type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        description: string;
    }[]
}

type Perms = AppUser["permissions"]; // Perms is now { id: string; title: string; description: string; }[]
// idexed access types can also be used in any other type operations
type Perm = AppUser["permissions"][number]; // Perm is now { id: string; title: string; description: string; }