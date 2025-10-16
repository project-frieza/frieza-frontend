import { SampleComponentParams } from "./SampleComponent.interface";

export default function SampleComponent({ title }: SampleComponentParams) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
