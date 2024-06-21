'use client'
import { useToast } from "@/components/ui/use-toast"
import { Button } from "./button"

export const NewsLetterBtn = () => {
    const { toast } = useToast()
  
    return (
      <Button className="font-bold  rounded-xl w-1/2 self-center p-5 text-lg text-white"
        onClick={() => {
          toast({
            title: "Dj Niorich: Newsletter",
            description: "Your email has been added to our newsletter",
          })
        }}
      >
        Subscribe Now
      </Button>
    )
  }
  