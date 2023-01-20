import styles from "./Ordernador.module.scss"
import opcoes from "./opcoes.json"

export default function Ordernador() {
	return (
		<button className={styles.ordenador}>
			<span>Ordenar Por</span>
			<div className={styles.ordenaodr__options}>
				{opcoes.map((opcao) => (
					<div className={styles.ordenador__option} key={opcao.value}>
						{opcao.nome}
					</div>
				))}
			</div>
		</button>
	)
}
