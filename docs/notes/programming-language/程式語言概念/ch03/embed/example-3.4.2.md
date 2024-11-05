\begin{algorithm}
\caption{Different Derivation of A = B + C * A}
\begin{algorithmic}

\state <assign> => <id> = <expr>
\state $\hspace{4.35em}$ => <id> = <expr> + <term>
\state $\hspace{4.35em}$ => <id> = <expr> + <term> * <factor>
\state $\hspace{4.35em}$ => <id> = <expr> + <term> * <id>
\state $\hspace{4.35em}$ => <id> = <expr> + <term> * A
\state $\hspace{4.35em}$ => <id> = <expr> + <factor> * A
\state $\hspace{4.35em}$ => <id> = <expr> + <id> * A
\state $\hspace{4.35em}$ => <id> = <expr> + C * A
\state $\hspace{4.35em}$ => <id> = <term> + C * A
\state $\hspace{4.35em}$ => <id> = <factor> + C * A
\state $\hspace{4.35em}$ => <id> = <id> + C * A
\state $\hspace{4.35em}$ => <id> = B + C * A
\state $\hspace{4.35em}$ => A = B + C * A

\end{algorithmic}
\end{algorithm}
