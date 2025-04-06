interface TooltipProps {
    text: string
    children: React.ReactNode
  }
  
  const Tooltip = ({ text, children }: TooltipProps) => {
    return (
      <div className="group/tooltip relative inline-block">
        {/* Tooltip Container */}
        <div className="absolute bottom-full left-1/2 z-30 mb-2 hidden transform group-hover/tooltip:block">
          <div className="relative">
            {/* Tooltip Content */}
            <div className="w-min whitespace-nowrap rounded-4 px-12 py-8 dark:bg-tooltip-bg-default-dark">
              <p className="text-body font-body text-12 font-regular leading-16 dark:text-tooltip-text-dark">
                {text}
              </p>
            </div>
            {/* Tooltip Arrow */}
            <div className="absolute left-[10%] top-full h-0 w-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-tooltip-bg-default-dark"></div>
          </div>
        </div>
  
        {/* Children Element */}
        <div className="flex items-center justify-center">{children}</div>
      </div>
    )
  }
  
  export default Tooltip
  