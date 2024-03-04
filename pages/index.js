import ProductList from "../components/ProductList";
import styled from "styled-components";
import bungee shadeimport { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";
 from GOOGLE_FONT_PROVIDER

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
  font-family:
`;

export default function HomePage() {
  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductList />
    </>
  );
}
