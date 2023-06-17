import React, { useState } from 'react';
// import closeBtn from '../../../images/closePopUp.png';

import styles from '../marca.module.css';

export default function AgeVerification() {
	const [month, setMonth] = useState(1);
	const [day, setDay] = useState(1);
	const [year, setYear] = useState(1930);
	const [legalAge, setLegalAge] = useState(false);
	const months = [
		{
			number: '01',
			name: 'Janeiro',
		},
		{
			number: '02',
			name: 'Fevereiro',
		},
		{
			number: '03',
			name: 'Março',
		},
		{
			number: '04',
			name: 'Abril',
		},
		{
			number: '05',
			name: 'Maio',
		},
		{
			number: '06',
			name: 'Junho',
		},
		{
			number: '07',
			name: 'Julho',
		},
		{
			number: '08',
			name: 'Agosto',
		},
		{
			number: '09',
			name: 'Setembro',
		},
		{
			number: '10',
			name: 'Outubro',
		},
		{
			number: '11',
			name: 'Novembro',
		},
		{
			number: '12',
			name: 'Dezembro',
		},
	];

	const days = [];
	for (let i = 1; i <= 31; i++) days.push(i);

	const currentYear = new Date().getFullYear();
	const years = [];
	for (let i = 1930; i <= currentYear; i++) years.push(i);

	function handleAge() {
		const age = currentYear - year;
		console.log('idade: ', age, 'ano: ', year);
		age >= 18 ? setLegalAge(true) : setLegalAge(false);
	}

	return (
		<>
			{legalAge ? null : (
				<div id={styles.container_pop_up}>
					<section className={styles.pop_up}>
						{/* <img src={closeBtn} onclick='closePopUp()' /> */}
						<h1 className={styles.title_pop_up}>
							VOCÊ TEM IDADE PARA TOMAR GORÓ?
						</h1>
						<h4 className={styles.text}>CONFIRME A SUA IDADE</h4>
						<div className={styles.container_date}>
							<span>
								<select
									name='day'
									className={`${styles.day} ${styles.select}`}
									onChange={e => setDay(e.target.value)}
								>
									<option>Idade</option>
									{days.map(day => {
										return (
											<option key={day} value={day}>
												{day}
											</option>
										);
									})}
								</select>
							</span>
							<span>
								<select
									name='month'
									className={`${styles.select} ${styles.month}`}
									onChange={e => setMonth(e.target.value)}
								>
									{months.map(month => {
										return (
											<option
												key={month}
												value={month.number}
											>
												{month.name}
											</option>
										);
									})}
								</select>
							</span>
							<span>
								<select
									name='year'
									id='year'
									className={`${styles.select} ${styles.year}`}
									onChange={e => setYear(e.target.value)}
								>
									{years.map(year => {
										return (
											<option key={year} value={year}>
												{year}
											</option>
										);
									})}
								</select>
							</span>
						</div>
					</section>
					<div className={styles.divider}>
						<hr className={styles.amarelo} />
						<hr className={styles.vermelho} />
						<hr className={styles.preto} />
					</div>

					<button id={styles.btn_popup} onClick={handleAge}>
						VERIFICAR IDADE
					</button>
				</div>
			)}
		</>
	);
}
