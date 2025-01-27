import { test, describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Vision from "./Vision";

describe('renders Vision', ()=>{
    
    beforeEach(()=>{
    })

    it("Should render Text", ()=> {
        render(<Vision></Vision>);
        const text2 = screen.getByText('Visión');
        expect(text2).toBeInTheDocument()
    })
    it("Should backgroundColor blue", ()=> {
        render(<Vision></Vision>);
        const shape3 = screen.getByTitle("shape3");
        expect(shape3).toHaveStyle({
            position: "relative",
        })
    })



})