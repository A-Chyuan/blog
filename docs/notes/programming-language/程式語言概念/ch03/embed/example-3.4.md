\begin{algorithm}
\caption{An Unambiguous Grammar for Expressions}
\begin{algorithmic}

\state <assign> → <id> = <expr>
\state <id> → A | B | C
\state <expr> → <expr> + <term>
\state $\hspace{4.35em}$ | <term>
\state <term> → <term> * <factor>
\state $\hspace{4.5em}$ | <factor>
\state <factor> → ( <expr> )
\state $\hspace{5em}$ | <id>

\end{algorithmic}
\end{algorithm}
