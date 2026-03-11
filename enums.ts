enum Role {
  ADMIN,
  USER,
  GUEST,
};
let userRole: Role = Role.ADMIN;
userRole = 1; // This is allowed because enums in TypeScript are essentially numbers.