
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";

const Auth: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container flex items-center justify-center min-h-screen px-4 py-16 pt-24 pb-32">
      <Card className="w-full max-w-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vivid-purple/10 to-soft-purple-300/10 pointer-events-none"></div>
        <CardHeader className="text-center relative z-10">
          <CardTitle className="text-2xl font-bold text-vivid-purple">Experience Hub</CardTitle>
          <CardDescription>Share your experiences with the world</CardDescription>
        </CardHeader>
        <Tabs defaultValue="login" className="w-full relative z-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <CardContent className="space-y-4 pt-5">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    className="pl-10 pr-10"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-vivid-purple hover:bg-purple-700 transition-all duration-300">
                Login
              </Button>
              <div className="text-center text-sm text-gray-500">
                <a href="#" className="underline hover:text-vivid-purple transition-colors">
                  Forgot password?
                </a>
              </div>
            </CardFooter>
          </TabsContent>
          <TabsContent value="register">
            <CardContent className="space-y-4 pt-5">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input 
                    placeholder="Username" 
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    className="pl-10 pr-10"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Confirm Password" 
                    className="pl-10 pr-10"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-vivid-purple hover:bg-purple-700 transition-all duration-300">
                Sign Up
              </Button>
            </CardFooter>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Auth;
