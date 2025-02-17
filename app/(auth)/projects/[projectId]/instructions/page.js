import CopyBtn from '@/components/CopyBtn';
import { CopyIcon } from 'lucide-react';
import React from 'react'

const page = async ({params}) => {
  const result = await params
  const projectId = await result.projectId

  
  if (!projectId) return (<div>Invalid Project ID</div>);

  // if (!process.env.WIDGET_URL) return (<div>Missing WIDGET_URL</div>);
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">Embed the code in your site</p>
      <div className="bg-blue-950 p-6 rounded-md mt-6 relative flex justify-between">
        <code className=" text-white">
          {`<my-widget project-id="${projectId}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <div className='text-white flex justify-between gap-2 items-center'>
        <CopyIcon />
        <CopyBtn text={`<my-widget project-id="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`} />
        </div>
      </div>
    </div>
  )
}

export default page