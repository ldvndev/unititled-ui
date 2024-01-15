'use client'

import {
  ComponentProps,
  useId,
  createContext,
  useContext,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

interface FileInputContextProps {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export function Root(props: RootProps) {
  const [files, setFiles] = useState<File[]>([])

  const id = useId()

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
