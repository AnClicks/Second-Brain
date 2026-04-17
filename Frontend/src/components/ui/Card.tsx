import type { ReactElement } from "react"
import { TrashIcon } from "../../icons/Trashicon"
import { ShareIcon } from "../../icons/Shareicon"
import { EmbeddedTweet } from './TweetRender'

type embbedLink = "twitter" | "youtube";
interface cardProps {
    titleIcon?: ReactElement,
    title: string,
    type: embbedLink,
    link: string
}

export const Card = (props: cardProps) => {
    return <>
        <div className="ml-6">
            <div className='bg-white rounded-md p-4 max-w-80 min-h-48 outline-solid outline-gray-200'>
                <div className='flex justify-between'>
                    <div className="flex items-center ">
                        <div className='text-gray-500 p-2'>
                            {props.titleIcon}
                        </div>
                        <span className="text-md">{props.title}</span>
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500 cursor-pointer">
                            <TrashIcon size={"md"} />
                        </div>
                        <div className="text-gray-500 cursor-pointer">
                            <a href={props.link} target="_blank"></a>
                            <ShareIcon size={"md"} />
                        </div>
                    </div>
                </div>
                <div> 
                    {props.type === "youtube" &&
                        <iframe className="w-full p-4"
                            src={props.link.replace("watch?v=", "/embed/")}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    }
                </div>
                <div>
                    {
                        props.type === "twitter" &&
                        (() => {
                            const id = props.link.match(/status\/(\d+)/)?.[1];
                            return id ? EmbeddedTweet(id) : null;
                        })()
                    }

                </div>
            </div>
        </div>
    </>
}