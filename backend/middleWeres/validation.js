

export const reqValidation = (document) => {
    if (!document || Object.keys(document).length === 0) {
      throw new Error("No fields to update"); // Throwing an error if validation fails
    }
    console.log("validation complete")
    // If validation passes, do nothing
  };