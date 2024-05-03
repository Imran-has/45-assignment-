let personName = "imran";
//lowercase
console.log("lowercase:", personName.toLowerCase());
//upercase
console.log("Upercase:", personName.toUpperCase());
//titlecase
console.log("titlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
export {};
