import LiquidChrome from "./liquid-chrome";

export default function Background() {
    return (
        <LiquidChrome
        color="#2ec27e"
        color2="#9141ac"
        speed={0.05}
        timeScale={0.618}
        className="z-[-1]"
      />
    )
}