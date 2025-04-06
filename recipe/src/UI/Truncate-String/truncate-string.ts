// Utility function to truncate a string
export const truncateString = (length: number, inputString: string): string => {
    if (inputString.length <= length) {
      return inputString // Return the string if it's already shorter or equal to the length
    }
    return inputString.substring(0, length) + "..." // Truncate and add ellipsis
  }
  