"use client";

interface AboutBlockProps {
  title: string;
  description: string[];
  element: string;
  fileName?: string;
}

const Line = ({ children, depth = 0 }: { children: React.ReactNode; depth?: number }) => {
  return (
    <div className="flex items-stretch h-6">
      {Array.from({ length: depth }).map((_, i) => (
        <div key={i} className="w-4 flex justify-center flex-shrink-0">
          <div className="w-px bg-border h-full" />
        </div>
      ))}
      <div className="w-2 flex-shrink-0" /> 
      <div className="flex items-center">{children}</div>
    </div>
  );
};

export default function AboutBlock({ title, description, element, fileName }: AboutBlockProps) {
  const name = fileName
    ? fileName.replace(".tsx", "")
    : title.toLowerCase().replace(/\s+/g, "-");

  const file = fileName ?? `${title.toLowerCase().replace(/\s+/g, "-")}.tsx`;

  const componentName = name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");

  return (
    <div className="flex-1 bg-card border border-border font-mono text-sm leading-relaxed overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-border bg-muted/30">
        <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
        <span className="ml-2 text-xs text-muted-foreground">{file}</span>
      </div>
      <div className="py-4">
        <Line depth={0}>
          <span className="text-foreground">
            <span className="text-purple-600 dark:text-purple-400">export default function</span>{" "}
            <span className="text-blue-600 dark:text-blue-300">{componentName}</span>{"() {"}
          </span>
        </Line>
        
        <Line depth={1}>
          <span className="text-purple-600 dark:text-purple-400">return</span>
          <span className="text-foreground">{" ("}</span>
        </Line>

        <Line depth={2}>
          <span className="text-blue-600 dark:text-blue-400">&lt;{element}</span>
          <span className="text-foreground ml-1.5">
            <span className="text-sky-600 dark:text-sky-300">id</span>=
            <span className="text-amber-600 dark:text-yellow-200">"{title}"</span>
          </span>
          <span className="text-blue-600 dark:text-blue-400">&gt;</span>
        </Line>

        {description.map((item, i) => (
          <Line key={i} depth={3}>
            <span className="text-foreground">
              <span className="text-blue-600 dark:text-blue-400">&lt;{element === "ul" ? "li" : "p"}&gt;</span>
              {item}
              <span className="text-blue-600 dark:text-blue-400">&lt;/{element === "ul" ? "li" : "p"}&gt;</span>
            </span>
          </Line>
        ))}

        <Line depth={2}>
          <span className="text-blue-600 dark:text-blue-400">&lt;/{element}&gt;</span>
        </Line>

        <Line depth={1}>
          <span className="text-foreground">{");"}</span>
        </Line>

        <Line depth={0}>
          <span className="text-foreground">{"}"}</span>
        </Line>
      </div>
    </div>
  );
}