'use client'
import React, { useEffect } from "react";
import mermaid from "mermaid";
import { Expand } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";

mermaid.initialize({
  startOnLoad: true,
  theme: "dark",
  securityLevel: "loose",
  fontFamily: "geistMono"
});

const Diagram = ({ chart }: { chart: string }) => {
  useEffect(() => {
    mermaid.contentLoaded();
  }, [])
  return (
    <div className="mermaid max-h-full flex justify-center">
      {chart}
    </div>
  )
}

export const Mermaid = ({ chart }: { chart: string }) => {
  useEffect(() => {
    mermaid.contentLoaded();
  }, [])
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="flex justify-end">
          <Expand className="h-4 w-4" />
        </div>
        <Diagram chart={chart} />
      </DialogTrigger>
      <DialogContent className="max-w-6xl h-5/6 my-10 p-0 flex flex-col align-middle justify-center">
        <Diagram chart={chart} />
      </DialogContent>
    </Dialog>
  );
}
