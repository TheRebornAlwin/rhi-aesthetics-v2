import { useState } from "react";
import { useUploadThing } from "../lib/uploadthing";
import { Upload, X, FileIcon, CheckCircle } from "lucide-react";

interface UploadedFile {
  name: string;
  url: string;
  size: number;
}

interface FileUploadProps {
  endpoint?: "imageUploader" | "videoUploader" | "pdfUploader";
  onUploadComplete?: (files: UploadedFile[]) => void;
}

export default function FileUpload({
  endpoint = "imageUploader",
  onUploadComplete,
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const { startUpload, isUploading } = useUploadThing(endpoint, {
    onClientUploadComplete: (res) => {
      const uploaded = res.map((file) => ({
        name: file.name,
        url: file.url,
        size: file.size,
      }));
      setUploadedFiles((prev) => [...prev, ...uploaded]);
      setFiles([]);
      onUploadComplete?.(uploaded);
    },
    onUploadError: (error: Error) => {
      console.error("Upload error:", error);
      alert(`Upload failed: ${error.message}`);
    },
  });

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    await startUpload(files);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <p className="text-lg font-medium text-gray-700 mb-2">
          Drag and drop files here
        </p>
        <p className="text-sm text-gray-500 mb-4">or</p>
        <label className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
          Browse Files
          <input
            type="file"
            multiple
            onChange={handleFileInput}
            className="hidden"
            accept={
              endpoint === "imageUploader"
                ? "image/*"
                : endpoint === "videoUploader"
                ? "video/*"
                : "application/pdf"
            }
          />
        </label>
      </div>

      {files.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-medium text-gray-900">Selected Files</h3>
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <FileIcon className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="text-red-500 hover:text-red-700"
                disabled={isUploading}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            onClick={handleUpload}
            disabled={isUploading}
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {isUploading ? "Uploading..." : "Upload Files"}
          </button>
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-medium text-gray-900">Uploaded Files</h3>
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {file.name}
                  </p>
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    View file
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
