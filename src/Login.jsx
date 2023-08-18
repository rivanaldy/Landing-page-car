import React, { useState } from 'react';
import { Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { supabase } from './supabaseClient';

function Login() {
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
       email: email,
       options:{
        emailRedirectTo:"/"
       }
      });
      console.log(data)
      if (error) {
        console.error(error);
      } else {
        localStorage.setItem('key', data.session);
       
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='max-w-md bg-gray-100 border p-10 rounded-xl flex justify-center items-center flex-col'>
        <h1 className='text-3xl font-bold text-teal-700'>Login</h1>
        <p className='text-1xl text-center'>Silahkan masuk email dan password untuk masuk ke akun</p>
        <div>
          <FormControl>
            <FormLabel>email</FormLabel>
            <Input onChange={(e) => setEmail(e.target.value)} placeholder='masukan email' type='text' colorScheme='teal' color={'teal'} />
          </FormControl>
          <FormControl>
            <Button onClick={handleLogin} colorScheme='teal' width={'full'}>
              Login
            </Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Login;
// import React, { useState } from 'react';
// import { Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { supabase } from './supabaseClient';

// function Login() {
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [email, setEmail] = useState('');

//   const handleLogin = async () => {
//     try {
//       const { data, error } = await supabase.auth.signInWithOtp({
//         email: email,
//       });

//       if (error) {
//         console.error(error);
//       } else {
//         console.log('OTP sent successfully');
       
//         navigate('/');
//       }
//     } catch (error) {
//       console.error('An unexpected error occurred:', error);
//     }
//   };

//   return (
//     <div className='w-full h-screen flex justify-center items-center'>
//       <div className='max-w-md bg-gray-100 border p-10 rounded-xl flex justify-center items-center flex-col'>
//         <h1 className='text-3xl font-bold text-teal-700'>Login</h1>
//         <p className='text-1xl text-center'>Silahkan masuk email untuk masuk ke akun</p>
//         <div>
//           <FormControl>
//             <FormLabel>email</FormLabel>
//             <Input onChange={(e) => setEmail(e.target.value)} placeholder='masukan email' type='text' colorScheme='teal' color={'teal'} />
//           </FormControl>
//           <FormControl>
//             <Button onClick={handleLogin} colorScheme='teal' width={'full'}>
//               Kirim OTP
//             </Button>
//           </FormControl>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
