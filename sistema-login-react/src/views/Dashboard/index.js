import {
	Box,
	Grid,
	Container,
	Typography,
	TextField,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	CircularProgress,
	Chip,
} from "@material-ui/core";

// ----------------------------------------------------------------------

const Dashboard = () => {
	const createData = (name, calories, fat, carbs, protein) => {
		return { name, calories, fat, carbs, protein };
	};

	const rows = [
		createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
		createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
		createData("Eclair", 262, 16.0, 24, 6.0),
		createData("Cupcake", 305, 3.7, 67, 4.3),
		createData("Gingerbread", 356, 16.0, 49, 3.9),
	];

	return (
		<Container maxWidth="xl">
			<Box sx={{ pb: 5 }}>
				<Typography variant="h4">Olá, seu fulano...</Typography>
			</Box>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={3}>
					<TextField
						required
						id="standard-required"
						label="Required"
						defaultValue="Hello World"
					/>
					<TextField
						disabled
						id="standard-disabled"
						label="Disabled"
						defaultValue="Hello World"
					/>
					<TextField
						id="standard-password-input"
						label="Password"
						type="password"
						autoComplete="current-password"
					/>
					<TextField
						id="standard-read-only-input"
						label="Read Only"
						defaultValue="Hello World"
						InputProps={{
							readOnly: true,
						}}
					/>
					<TextField
						id="standard-number"
						label="Number"
						type="number"
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						id="standard-search"
						label="Search field"
						type="search"
					/>
					<TextField
						id="standard-helperText"
						label="Helper text"
						defaultValue="Default Value"
						helperText="Some important text"
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Typography variant="h1" component="h2" gutterBottom>
						h1. Heading
					</Typography>
					<Typography variant="h2" gutterBottom>
						h2. Heading
					</Typography>
					<Typography variant="h3" gutterBottom>
						h3. Heading
					</Typography>
					<Typography variant="h4" gutterBottom>
						h4. Heading
					</Typography>
					<Typography variant="h5" gutterBottom>
						h5. Heading
					</Typography>
					<Typography variant="h6" gutterBottom>
						h6. Heading
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<TableContainer component={Paper}>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>
										Dessert (100g serving)
									</TableCell>
									<TableCell align="right">
										Calories
									</TableCell>
									<TableCell align="right">
										Fat&nbsp;(g)
									</TableCell>
									<TableCell align="right">
										Carbs&nbsp;(g)
									</TableCell>
									<TableCell align="right">
										Protein&nbsp;(g)
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.name}>
										<TableCell component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="right">
											{row.calories}
										</TableCell>
										<TableCell align="right">
											{row.fat}
										</TableCell>
										<TableCell align="right">
											{row.carbs}
										</TableCell>
										<TableCell align="right">
											{row.protein}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Accordion>
						<AccordionSummary
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>Accordion 1</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							aria-controls="panel2a-content"
							id="panel2a-header"
						>
							<Typography>Accordion 2</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion disabled>
						<AccordionSummary
							aria-controls="panel3a-content"
							id="panel3a-header"
						>
							<Typography>Disabled Accordion</Typography>
						</AccordionSummary>
					</Accordion>
				</Grid>

				<Grid item xs={12} md={6} lg={8}>
					<CircularProgress />
					<CircularProgress color="secondary" />
				</Grid>

				<Grid item xs={12} md={6} lg={4}>
					<Chip label="Basic" />
					<Chip label="Disabled" disabled />
					<Chip label="Basic" />
					<Chip label="Disabled" disabled color="primary" />
					<Chip label="Basic" color="secondary" />
					<Chip label="Disabled" disabled color="primary" />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Dashboard;
