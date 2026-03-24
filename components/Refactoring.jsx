import { Button } from "./Button"

export const Refactoring = ({ type }) => {
  if (type === "password") {
    return (
      <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div className="flex justify-center items-center bg-[#142040] border border-[#243570] w-80 p-6 rounded">
          <label htmlFor="">
            <span style={{ color: "#D0E4FF" }}>Password</span>
            <input type="text" className="bg-[#0D1533] border border-[#243570] text-[#D0E4FF] text-sm rounded focus:ring-[#4D9EFF] focus:border-[#4D9EFF] block w-full p-2.5 mt-2" />
          </label>
        </div>
      </div>
    )
  } else {
    return (
      <div className="text-center p-20 mt-60 flex flex-col items-center justify-center rounded-lg opacity-100 space-y-12">
        <p className="text-3xl">Coming Soon :)</p>

        <Button href="/">Back to Home</Button>
      </div>
    )
  }

}

Refactoring.displayName = "Refactoring";