"use client"
import { useState } from "react";

export const Clamped = ({ Content }: { Content: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // @ts-ignore
  const stringContent = (Content?.valueOf().props.children as Array<React.ReactNode>)
    .map((item: any) => item?.props?.children || item).join('\n')
  return (
    <div>
      <div className={`text-gray-400 mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
        {Content}
      </div>
      {
        stringContent.split('\n').length > 2 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 hover:underline mb-8"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )
      }
    </div>

  )
}