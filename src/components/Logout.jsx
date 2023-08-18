import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { Button,Link } from "@chakra-ui/react";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error during logout:", error.message);
      } else {
        console.log("Logout successful");
        localStorage.removeItem("key");
        navigate("/login");
        console.log("mm");
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  return (
    <Button onClick={handleLogout} mr={4} colorScheme="teal"
    variant="solid"
    size="sm">
    <Link className="font-bold">Logout</Link>
  </Button>
  );
};

export default Logout;
