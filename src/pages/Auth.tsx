
// import React, { useState } from 'react';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
// import { auth } from "../firebaseConfig";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";


// const Auth: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   return (
//     <div className="container flex items-center justify-center min-h-screen px-4 py-16 pt-24 pb-32">
//       <Card className="w-full max-w-md relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-vivid-purple/10 to-soft-purple-300/10 pointer-events-none"></div>
//         <CardHeader className="text-center relative z-10">
//           <CardTitle className="text-2xl font-bold text-vivid-purple">Experience Hub</CardTitle>
//           <CardDescription>Share your experiences with the world</CardDescription>
//         </CardHeader>
//         <Tabs defaultValue="login" className="w-full relative z-10">
//           <TabsList className="grid w-full grid-cols-2">
//             <TabsTrigger value="login">Login</TabsTrigger>
//             <TabsTrigger value="register">Register</TabsTrigger>
//           </TabsList>
//           <TabsContent value="login">
//             <CardContent className="space-y-4 pt-5">
//               <div className="space-y-2">
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
//                   <Input
//                     type="email"
//                     placeholder="Email"
//                     className="pl-10"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
//                   <Input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     className="pl-10 pr-10"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                   >
//                     {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter className="flex flex-col space-y-4">
//               <Button className="w-full bg-vivid-purple hover:bg-purple-700 transition-all duration-300">
//                 Login
//               </Button>
//               <div className="text-center text-sm text-gray-500">
//                 <a href="#" className="underline hover:text-vivid-purple transition-colors">
//                   Forgot password?
//                 </a>
//               </div>
//             </CardFooter>
//           </TabsContent>
//           <TabsContent value="register">
//             <CardContent className="space-y-4 pt-5">
//               <div className="space-y-2">
//                 <div className="relative">
//                   <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
//                   <Input
//                     placeholder="Username"
//                     className="pl-10"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
//                   <Input
//                     type="email"
//                     placeholder="Email"
//                     className="pl-10"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
//                   <Input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     className="pl-10 pr-10"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                   >
//                     {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
//                   <Input
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm Password"
//                     className="pl-10 pr-10"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                   >
//                     {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button className="w-full bg-vivid-purple hover:bg-purple-700 transition-all duration-300">
//                 Sign Up
//               </Button>
//             </CardFooter>
//           </TabsContent>
//         </Tabs>
//       </Card>
//     </div>
//   );
// };

// export default Auth;



import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

const Auth: React.FC = () => {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      setMessage("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Account created successfully!");
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful!");
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setMessage("Please enter your email to reset password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent!");
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-screen px-4 py-16 pt-24 pb-32">
      <Card className="w-full max-w-md relative overflow-hidden shadow-lg rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-300/10 pointer-events-none"></div>
        <CardHeader className="text-center relative z-10">
          <CardTitle className="text-2xl font-bold text-purple-600">
            Experience Hub
          </CardTitle>
          <CardDescription>
            Share your experiences with the world
          </CardDescription>
        </CardHeader>

        <Tabs value={tab} onValueChange={(v) => setTab(v as any)} className="w-full relative z-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          {/* LOGIN TAB */}
          <TabsContent value="login">
            <CardContent className="space-y-4 pt-5">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>

              <div className="text-center text-sm text-gray-500">
                <button
                  onClick={handlePasswordReset}
                  className="underline hover:text-purple-600 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            </CardFooter>
          </TabsContent>

          {/* REGISTER TAB */}
          <TabsContent value="register">
            <CardContent className="space-y-4 pt-5">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Username"
                  className="pl-10"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="pl-10 pr-10"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                onClick={handleRegister}
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </Button>
            </CardFooter>
          </TabsContent>
        </Tabs>

        {message && (
          <p className="text-center text-sm text-gray-600 mt-4">{message}</p>
        )}
      </Card>
    </div>
  );
};

export default Auth;
