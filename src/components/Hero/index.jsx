import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
    FaReact,
    FaJs,
    FaCss3Alt,
    FaHtml5,
    FaNodeJs
} from "react-icons/fa";

import { SiTypescript } from "react-icons/si";
import "./hero.css";

import profile from "../../assets/images/profile.png";


export default function Hero() {

    const phrases = [
        "Construo interfaces modernas.",
        "Transformo ideias em aplicações web.",
        "Exploro React, Node.js e IA."
    ];

    const [phraseIndex, setPhraseIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);


    useEffect(() => {

        const currentPhrase = phrases[phraseIndex];

        const speed = isDeleting ? 40 : 80;

        const timer = setTimeout(() => {

            if (!isDeleting) {

                setText(
                    currentPhrase.substring(
                        0,
                        text.length + 1
                    )
                );

                if (text === currentPhrase) {

                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1800);

                }

            } else {

                setText(
                    currentPhrase.substring(
                        0,
                        text.length - 1
                    )
                );

                if (text === "") {

                    setIsDeleting(false);

                    setPhraseIndex(
                        (prev) =>
                            (prev + 1) % phrases.length
                    );

                }

            }

        }, speed);

        return () => clearTimeout(timer);

    }, [text, isDeleting, phraseIndex]);


    return (

        <section
            className="hero"
            id="home"
        >

            {/* LADO ESQUERDO */}

            <motion.div
                className="hero-content"

                initial={{
                    opacity: 0,
                    x: -40
                }}

                animate={{
                    opacity: 1,
                    x: 0
                }}

                transition={{
                    duration: 0.8
                }}
            >

                <p className="hero-greeting">
                    Olá, eu sou a Milena 👋
                </p>


                <h1>
                    Desenvolvedora{" "}
                    <span>Javascript</span>
                </h1>


                <h2 className="hero-typing">

                    {text}

                    <span className="cursor">
                        |
                    </span>

                </h2>


                <p className="hero-description">

                    Crio aplicações web modernas,
                    responsivas e focadas em experiências
                    simples, intuitivas e funcionais.

                </p>


                <div className="hero-buttons">

                    <a
                        href="#projects"
                        className="hero-button primary"
                    >
                        Ver meus projetos
                    </a>


                    <a
                        href="/resume.pdf"
                        className="hero-button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Baixar Currículo
                    </a>

                </div>

            </motion.div>


            {/* LADO DIREITO */}

            <motion.div
                className="hero-image-container"

                initial={{
                    opacity: 0,
                    scale: 0.8
                }}

                animate={{
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    duration: 1,
                    delay: 0.3
                }}
            >

                <div className="circle"></div>


                <img
                    src={profile}
                    alt="Milena"
                    className="hero-image"
                />


               <div className="floating-icons">

                    <div className="icon react">
                        <FaReact />
                    </div>

                    <div className="icon js">
                        <FaJs />
                    </div>

                    <div className="icon css">
                        <FaCss3Alt />
                    </div>

                    <div className="icon html">
                        <FaHtml5 />
                    </div>

                    <div className="icon node">
                        <FaNodeJs />
                    </div>

                    <div className="icon typescript">
                        <SiTypescript />
                    </div>

                </div>

            </motion.div>

        </section>

    );
}