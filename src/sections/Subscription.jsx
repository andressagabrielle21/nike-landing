import Button from "../components/Button"

const Subscription = () => {
  return (
    <div className="flex max-md:flex-col gap-10 justify-evenly items-center max-container">
      <h1 className="text-4xl font-palanquin font-bold leading-[68px] lg:max-w-md">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h1>
      
      <div className="flex justify-around rounded-full border-[1px] border-black w-50 py-2 px-2 info-text max-md:w-full">
        <input type="text" className="pl-3" placeholder="subscribe@nike.com"/>

        <div className="max-md:hidden block">
          <Button color="red" label="Sign Up"/>
        </div>
      </div>

      <div className="max-md:block hidden w-full">
          <Button color="red" label="Sign Up"/>
      </div>
    </div>
  )
}

export default Subscription