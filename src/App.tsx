import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
function App() {

  return (
    <>
      <p className="text-yellow-400">Vite + React + typescript + tailwind + shadcn ui</p>
        <div className="w-1/2 border border-2">
            <Input type="email" placeholder="Email" />
            <Button>Click me</Button>
        </div>
    </>
  )
}

export default App
