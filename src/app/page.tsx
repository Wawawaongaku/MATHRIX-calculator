"use client";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import Button from "./(components)/Button";
import { useState } from "react";
import axios from "axios";
import { evaluate } from "mathjs";

const Home = () => {
    const buttons = [
        "AC",
        "C",
        "mod",
        "►",
        "aᵡ",
        "(",
        ")",
        "%",
        "7",
        "8",
        "9",
        "÷",
        "4",
        "5",
        "6",
        "×",
        "1",
        "2",
        "3",
        "-",
        "=",
        "0",
        ".",
        "+",
    ];
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleEqualClick = async () => {
        const formular = input
            .replace(/÷/g, "/")
            .replace(/×/g, "*")
            .replace(/%/g, "*0.01")
            .replace(/mod/g, "%")
            .replace(/\^/g, "**");
        try {
            const res = await axios.post("/api", { formular });
            setOutput(res.data.body);
        } catch (error) {
            console.error("Error during calculation:", error);
            setOutput("Error");
        }
    };

    return (
        <>
            <Header />
            <div className={styles.container}></div>

            <div className={styles.button_container}>
                <input className={styles.calc_input} value={String(input)} readOnly />
                <input
                    className={styles.calc_output}
                    value={String(output) + "="}
                    readOnly
                />
                {buttons.map((label, index) => (
                    <Button
                        key={index}
                        label={label}
                        onClick={() => {
                            switch (label) {
                                case "AC":
                                    setInput("");
                                    setOutput("");
                                    break;
                                case "C":
                                    setInput("");
                                    break;
                                case "aᵡ":
                                    setInput(input + "^");
                                    break;
                                case "►":
                                    setInput(input.slice(0, -1));
                                    break;
                                case "=":
                                    handleEqualClick();
                                    break;
                                default:
                                    setInput(input + label);
                                    break;
                            }
                        }}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Home;
