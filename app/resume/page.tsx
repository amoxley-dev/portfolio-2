export default function Resume() {
    return (
        <div
            className="h-full w-full flex justify-center"
        >
            <object 
                data="/alexMoxleyResume.pdf" 
                type="application/pdf"
                height="100%"
                width="100%"
                className="h-4/5 w-4/5 border-2 border-purple-900 rounded-md"
            >
                Resume
            </object>
        </div>
    )
}