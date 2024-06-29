import { ReactNode } from "react"

type PageProps = {
    children: ReactNode;
  };

const Page = ({children}:PageProps) => {
  
  return (
    <section className="flex justify-center items-center  m-auto   bg-[#0C0F19] text-white flex-col gap-20 px-10 py-4">
        {children}
    </section>
  )
}

export default Page