import React, { useState, useRef, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Camera, MapPin, Tag, AlertCircle, FileVideo, FileAudio, Image, Copy, Edit, BookOpenText, Bold, Italic, Heading, ListOrdered, Quote } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface MediaFile {
  file: File;
  type: 'image' | 'video' | 'audio';
  preview: string;
}

interface FormattingButton {
  label: string;
  icon: React.ReactNode;
  format: string;
}

const CreateExperience: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [content, setContent] = useState('');
  const [activeMediaTab, setActiveMediaTab] = useState('photos');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const getFileType = (file: File): 'image' | 'video' | 'audio' | null => {
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.startsWith('video/')) return 'video';
    if (file.type.startsWith('audio/')) return 'audio';
    return null;
  };

  const handleMediaUpload = (files: FileList | null) => {
    if (!files) return;

    const newFiles: MediaFile[] = [];
    let unsupportedFiles = 0;

    Array.from(files).forEach(file => {
      const fileType = getFileType(file);

      if (fileType) {
        const preview = URL.createObjectURL(file);
        newFiles.push({ file, type: fileType, preview });
      } else {
        unsupportedFiles++;
      }
    });

    if (unsupportedFiles > 0) {
      toast({
        title: "Unsupported file format",
        description: `${unsupportedFiles} file(s) were not added because they are not supported.`,
        variant: "destructive",
      });
    }

    setMediaFiles(prev => [...prev, ...newFiles]);
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    handleMediaUpload(e.dataTransfer.files);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleMediaUpload(e.target.files);
  };

  const removeMedia = (index: number) => {
    setMediaFiles(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleTextFormat = (format: string) => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    let formattedText = '';
    let cursorOffset = 0;

    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        cursorOffset = 2;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        cursorOffset = 1;
        break;
      case 'heading':
        formattedText = `# ${selectedText}`;
        cursorOffset = 2;
        break;
      case 'quote':
        formattedText = `> ${selectedText}`;
        cursorOffset = 2;
        break;
      case 'list':
        formattedText = selectedText
          .split('\n')
          .map(line => line.trim() ? `- ${line}` : line)
          .join('\n');
        cursorOffset = 2;
        break;
      default:
        formattedText = selectedText;
    }

    const newContent = content.substring(0, start) + formattedText + content.substring(end);
    setContent(newContent);

    setTimeout(() => {
      if (textareaRef.current) {
        if (start === end) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + formattedText.length;
        } else {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = end + cursorOffset * 2;
        }
        textareaRef.current.focus();
      }
    }, 0);
  };

  const copyToClipboard = () => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const textToCopy = start !== end ? content.substring(start, end) : content;

    navigator.clipboard.writeText(textToCopy).then(() => {
      toast({
        title: "Copied to clipboard",
        description: start !== end ? "Selected text copied to clipboard." : "All content copied to clipboard.",
      });
    }).catch(err => {
      toast({
        title: "Failed to copy",
        description: "Could not copy text to clipboard. Please try again.",
        variant: "destructive",
      });
    });
  };

  const pasteFromClipboard = async () => {
    if (!textareaRef.current) return;

    try {
      const clipText = await navigator.clipboard.readText();
      if (!clipText) {
        toast({
          title: "Nothing to paste",
          description: "Clipboard is empty.",
          variant: "destructive",
        });
        return;
      }

      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newContent = content.substring(0, start) + clipText + content.substring(end);
      setContent(newContent);

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + clipText.length;
          textareaRef.current.focus();
        }
      }, 0);

      toast({
        title: "Content pasted",
        description: "Clipboard content has been added to your story.",
      });
    } catch (err) {
      toast({
        title: "Cannot access clipboard",
        description: "Please check your browser permissions for clipboard access.",
        variant: "destructive",
      });
    }
  };

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const videoElement = document.createElement('video');
      videoElement.srcObject = stream;

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      await new Promise((resolve) => {
        videoElement.onloadedmetadata = () => {
          videoElement.play();
          canvas.width = videoElement.videoWidth;
          canvas.height = videoElement.videoHeight;
          context?.drawImage(videoElement, 0, 0);

          stream.getTracks().forEach(track => track.stop());
          resolve(true);
        };
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], `camera-capture-${Date.now()}.jpg`, { type: 'image/jpeg' });
          const preview = URL.createObjectURL(blob);
          setMediaFiles(prev => [...prev, { file, type: 'image', preview }]);

          toast({
            title: "Photo captured",
            description: "Your photo has been added to the media gallery.",
          });
        }
      }, 'image/jpeg');

    } catch (error) {
      toast({
        title: "Camera access denied",
        description: "Please allow camera access to take photos.",
        variant: "destructive",
      });
    }
  };

  const formattingButtons: FormattingButton[] = [
    { label: "Bold", icon: <Bold className="h-4 w-4" />, format: "bold" },
    { label: "Italic", icon: <Italic className="h-4 w-4" />, format: "italic" },
    { label: "Heading", icon: <Heading className="h-4 w-4" />, format: "heading" },
    { label: "Quote", icon: <Quote className="h-4 w-4" />, format: "quote" },
    { label: "List", icon: <ListOrdered className="h-4 w-4" />, format: "list" },
  ];

  const handlePublish = () => {
    if (!title.trim()) {
      toast({
        title: "Title required",
        description: "Please provide a title for your experience.",
        variant: "destructive",
      });
      return;
    }

    if (!category) {
      toast({
        title: "Category required",
        description: "Please select a category for your experience.",
        variant: "destructive",
      });
      return;
    }

    if (!content.trim()) {
      toast({
        title: "Story required",
        description: "Please share your experience in the story section.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Experience published!",
      description: "Your experience has been shared with the community.",
    });
  };

  const saveDraft = () => {
    toast({
      title: "Draft saved",
      description: "Your experience has been saved as a draft.",
    });
  };

  return (
    <div className="container max-w-3xl px-4 py-16 pt-24 pb-32">
      <Card className="shadow-lg border-soft-purple-100">
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 bg-soft-purple-100 rounded-full mb-4 mx-auto">
            <BookOpenText className="h-6 w-6 text-vivid-purple" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Share Your Experience</CardTitle>
          <CardDescription className="text-center">
            Share your journey with the Experience Hub community
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium flex items-center gap-2">
              <span>Title</span>
              <span className="text-xs text-red-500">*</span>
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your experience a catchy title"
              className="transition-all duration-300 focus-within:border-vivid-purple"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium flex items-center gap-2">
              <span>Category</span>
              <span className="text-xs text-red-500">*</span>
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full transition-all duration-300 focus:border-vivid-purple">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="travel">Travel</SelectItem>
                <SelectItem value="career">Career</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="location" className="text-sm font-medium">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> Location
                </span>
              </label>
              <span className="text-xs text-gray-500">Optional</span>
            </div>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Where did this experience take place?"
              className="transition-all duration-300 focus-within:border-vivid-purple"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="content" className="text-sm font-medium flex items-center gap-2">
                <span>Your Story</span>
                <span className="text-xs text-red-500">*</span>
              </label>
              <div className="flex flex-wrap space-x-1">
                {formattingButtons.map((button, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleTextFormat(button.format)}
                    className="px-2 h-8"
                    title={button.label}
                  >
                    {button.icon}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyToClipboard}
                  className="px-2 h-8"
                  title="Copy text"
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={pasteFromClipboard}
                  className="px-2 h-8"
                  title="Paste from clipboard"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative border rounded-md focus-within:ring-1 focus-within:ring-vivid-purple focus-within:border-vivid-purple">
              <Textarea
                id="content"
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share the details of your experience..."
                className="min-h-[200px] transition-all duration-300 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-sans"
              />
            </div>
            <p className="text-xs text-gray-500">
              Use formatting tools above to enhance your story. You can also use markdown: **bold**, *italic*, # heading
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Add Media
            </label>
            <Tabs value={activeMediaTab} onValueChange={setActiveMediaTab}>
              <TabsList className="grid grid-cols-4 mb-2">
                <TabsTrigger value="photos" className="flex items-center gap-1">
                  <Image className="h-4 w-4" />
                  <span>Photos</span>
                </TabsTrigger>
                <TabsTrigger value="camera" className="flex items-center gap-1">
                  <Camera className="h-4 w-4" />
                  <span>Camera</span>
                </TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center gap-1">
                  <FileVideo className="h-4 w-4" />
                  <span>Videos</span>
                </TabsTrigger>
                <TabsTrigger value="audio" className="flex items-center gap-1">
                  <FileAudio className="h-4 w-4" />
                  <span>Audio</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="photos">
                <div
                  className={`border-2 ${dragActive ? 'border-vivid-purple bg-soft-purple-50' : 'border-dashed border-gray-300'} rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-soft-purple-50 rounded-full flex items-center justify-center mb-2">
                      <Image className="h-8 w-8 text-vivid-purple" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {dragActive ? 'Drop photos to upload' : 'Click to upload or drag and drop photos'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                  <input
                    ref={fileInputRef}
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </TabsContent>

              <TabsContent value="camera">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors" onClick={handleCameraCapture}>
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-soft-purple-50 rounded-full flex items-center justify-center mb-2">
                      <Camera className="h-8 w-8 text-vivid-purple" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Click to take a photo using your camera
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Make sure to allow camera access when prompted
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="videos">
                <div
                  className={`border-2 ${dragActive ? 'border-vivid-purple bg-soft-purple-50' : 'border-dashed border-gray-300'} rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-soft-purple-50 rounded-full flex items-center justify-center mb-2">
                      <FileVideo className="h-8 w-8 text-vivid-purple" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {dragActive ? 'Drop videos to upload' : 'Click to upload or drag and drop videos'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">MP4, WebM, MOV up to 50MB</p>
                  <input
                    ref={fileInputRef}
                    id="file-upload"
                    type="file"
                    accept="video/*"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </TabsContent>

              <TabsContent value="audio">
                <div
                  className={`border-2 ${dragActive ? 'border-vivid-purple bg-soft-purple-50' : 'border-dashed border-gray-300'} rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-soft-purple-50 rounded-full flex items-center justify-center mb-2">
                      <FileAudio className="h-8 w-8 text-vivid-purple" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {dragActive ? 'Drop audio files to upload' : 'Click to upload or drag and drop audio'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">MP3, WAV, OGG up to 20MB</p>
                  <input
                    ref={fileInputRef}
                    id="file-upload"
                    type="file"
                    accept="audio/*"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </TabsContent>
            </Tabs>

            {mediaFiles.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Uploaded Media ({mediaFiles.length})</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {mediaFiles.map((media, index) => (
                    <div key={index} className="relative group">
                      {media.type === 'image' && (
                        <img
                          src={media.preview}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-24 object-cover rounded-md border border-gray-200"
                        />
                      )}
                      {media.type === 'video' && (
                        <div className="w-full h-24 bg-gray-100 rounded-md border border-gray-200 flex items-center justify-center">
                          <FileVideo className="h-8 w-8 text-gray-400" />
                          <span className="text-xs text-gray-500 ml-1">{media.file.name.substring(0, 15)}</span>
                        </div>
                      )}
                      {media.type === 'audio' && (
                        <div className="w-full h-24 bg-gray-100 rounded-md border border-gray-200 flex items-center justify-center">
                          <FileAudio className="h-8 w-8 text-gray-400" />
                          <span className="text-xs text-gray-500 ml-1">{media.file.name.substring(0, 15)}</span>
                        </div>
                      )}
                      <button
                        onClick={() => removeMedia(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="tags" className="text-sm font-medium flex items-center gap-1">
              <Tag className="h-4 w-4" /> Tags (separated by commas)
            </label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="travel, adventure, europe, etc."
              className="transition-all duration-300 focus-within:border-vivid-purple"
            />
          </div>

          <div className="bg-soft-purple-50 p-4 rounded-lg flex items-start gap-3 text-sm">
            <AlertCircle className="h-5 w-5 text-vivid-purple flex-shrink-0 mt-0.5" />
            <p className="text-gray-700">
              Your experience will be reviewed briefly before being published to ensure it meets our community guidelines.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between gap-3">
          <Button variant="outline" className="sm:w-auto w-full" onClick={saveDraft}>Save Draft</Button>
          <Button
            className="bg-vivid-purple hover:bg-purple-700 sm:w-auto w-full"
            onClick={handlePublish}
          >
            Publish Experience
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateExperience;
