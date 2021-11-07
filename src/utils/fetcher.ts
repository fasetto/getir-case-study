export const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * A fetcher function for all api interactions.
 * @param resource Resource must start with / (slash)
 *
 * @example
    try {
      const response = await fetcher("/auth/login", {
        method: "POST",
        body: {
          email,
          password
        },
      });
      console.log(response)
    } catch (err) {
      console.log(err.info)
    }
  };
 */
const fetcher = async (resource: string, init?: RequestInit) => {
  const response = await fetch(`${API_URL}${resource}`, init);

  if (!response.ok) {
    const error = new Error("Failed to fetch data.");
    throw error;
  }

  return response;
};

export default fetcher;
