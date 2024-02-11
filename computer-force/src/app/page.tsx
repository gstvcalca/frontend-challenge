"use client"

import { FilterBar } from "./components/filter-bar";
import { ProductsList } from "./components/products-list";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default function Home() {
  return (
    <PageWrapper>
      <FilterBar/>
      <ProductsList/>
    </PageWrapper>
  );
}
