'use client'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {
  const [progress, setProgress] = useState(0)

  const handleSend = async () => {
    try {
      setProgress(0)
      await axios.get(
        'https://bbs-static.miyoushe.com/static/2024/01/04/4c1ca82464cd776073494fe714c4a301_8314696608895583946.png',
        {
          params: {
            t: new Date().getTime(),
          },
          onDownloadProgress: (e) => {
            if (e.total) {
              setProgress(Math.round((e.loaded / e.total) * 100))
            }
          },
        }
      )
    } catch {}
  }

  return (
    <div className="container mx-auto">
      <div className="space-y-4">
        <Button onClick={handleSend}>Send Request</Button>

        <Progress value={progress} />

        <div>{progress}%</div>
      </div>
    </div>
  )
}
