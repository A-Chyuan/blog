\begin{algorithm}
\caption{Derivation of A = B + C * A}
\begin{algorithmic}

\state <assign> => <id> = <expr>
\state $\hspace{4.35em}$ => A = <expr>
\state $\hspace{4.35em}$ => A = <expr> + <term>
\state $\hspace{4.35em}$ => A = <term> + <term>
\state $\hspace{4.35em}$ => A = <factor> + <term>
\state $\hspace{4.35em}$ => A = <id> + <term>
\state $\hspace{4.35em}$ => A = B + <term>
\state $\hspace{4.35em}$ => A = B + <term> * <factor>
\state $\hspace{4.35em}$ => A = B + <factor> * <factor>
\state $\hspace{4.35em}$ => A = B + <id> * <factor>
\state $\hspace{4.35em}$ => A = B + C * <factor>
\state $\hspace{4.35em}$ => A = B + C * <id>
\state $\hspace{4.35em}$ => A = B + C * A

\end{algorithmic}
\end{algorithm}
