import { useEffect } from "react";

interface DocumentMetaProps {
  title: string;
  description: string;
}

function DocumentMeta({ title, description }: DocumentMetaProps) {
  useEffect(() => {
    document.title = title;

    const descriptionElement = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    descriptionElement?.setAttribute("content", description);
  }, [description, title]);

  return null;
}

export default DocumentMeta;
