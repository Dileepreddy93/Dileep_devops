import './App.css'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip, ResponsiveContainer } from 'recharts'
import { Bell, Search, Menu, Home, BarChart as BarChartIcon, ListTodo, Activity, Sun, Moon } from 'lucide-react'

type Theme = 'light' | 'dark'

const analyticsData = Array.from({ length: 12 }, (_, i) => ({
	month: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i],
	visits: Math.round(400 + Math.random() * 800),
	conversions: Math.round(50 + Math.random() * 200),
}))

const activity = [
	{ id: 1, text: 'Deployed v1.2.3 to production', time: '2h ago' },
	{ id: 2, text: 'New issue opened: Payment webhook', time: '3h ago' },
	{ id: 3, text: 'Design review completed for onboarding', time: '6h ago' },
	{ id: 4, text: 'Closed task: Refactor auth middleware', time: '1d ago' },
]

const tasks = [
	{ id: 1, title: 'Revamp dashboard charts', progress: 72 },
	{ id: 2, title: 'Migrate to new auth service', progress: 38 },
	{ id: 3, title: 'QA pass on mobile layouts', progress: 56 },
]

export default function App() {
	const [theme, setTheme] = useState<Theme>('dark')
	const [sidebarOpen, setSidebarOpen] = useState(false)

	const rootClass = useMemo(() => (theme === 'dark' ? 'dark' : ''), [theme])

	return (
		<div className={rootClass}>
			<div className="min-h-screen aurora-bg">
				{/* Top Nav */}
				<header className="sticky top-0 z-30 glass">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 items-center justify-between">
							<div className="flex items-center gap-3">
								<button aria-label="Toggle menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/10 transition" onClick={() => setSidebarOpen(v => !v)}>
									<Menu className="h-5 w-5" />
								</button>
								<span className="text-lg font-semibold tracking-tight">NovaDash</span>
							</div>

							<div className="hidden md:flex items-center gap-2 surface rounded-xl px-3 py-2 w-96">
								<Search className="h-4 w-4 text-muted-foreground" />
								<input placeholder="Search projects, tasks..." className="w-full bg-transparent outline-none placeholder:text-muted-foreground text-sm" />
							</div>

							<div className="flex items-center gap-2">
								<button className="relative h-10 w-10 rounded-lg hover:bg-muted inline-flex items-center justify-center transition" aria-label="Notifications">
									<Bell className="h-5 w-5" />
									<span className="absolute -right-0 -top-0 h-2.5 w-2.5 rounded-full bg-primary"></span>
								</button>
								<button className="h-10 w-10 rounded-lg hover:bg-muted inline-flex items-center justify-center" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
									{theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
								</button>
								<div className="relative">
									<button className="surface rounded-xl px-2 py-1.5 inline-flex items-center gap-2">
										<div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary to-accent" />
										<span className="text-sm">Alex</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</header>

				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
					{/* Sidebar */}
					<AnimatePresence>
						{(sidebarOpen || typeof window === 'undefined' || window.innerWidth >= 768) && (
							<motion.aside
								initial={{ x: -20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: -20, opacity: 0 }}
								transition={{ type: 'spring', stiffness: 260, damping: 24 }}
								className="surface rounded-2xl p-4 h-fit md:sticky md:top-20"
							>
								<nav className="space-y-1" aria-label="Sidebar">
									<SidebarLink icon={<Home className="h-4 w-4" />} label="Overview" active />
									<SidebarLink icon={<BarChartIcon className="h-4 w-4" />} label="Analytics" />
									<SidebarLink icon={<Activity className="h-4 w-4" />} label="Activity" />
									<SidebarLink icon={<ListTodo className="h-4 w-4" />} label="Tasks" />
								</nav>
								<div className="mt-6 rounded-xl p-4 surface">
									<p className="text-sm text-muted-foreground">Storage</p>
									<div className="mt-2 h-2 w-full rounded-full bg-muted">
										<div className="h-2 rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: '62%' }} />
									</div>
									<p className="mt-2 text-xs text-muted-foreground">62% used</p>
								</div>
							</motion.aside>
						)}
					</AnimatePresence>

					{/* Main content */}
					<main className="space-y-6">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
							<div className="lg:col-span-2 space-y-6">
								<GlassCard>
									<div className="flex items-center justify-between">
										<h2 className="text-lg font-semibold">Traffic Overview</h2>
										<div className="flex items-center gap-2">
											<SelectPill label="Last 12 months" />
											<button className="h-9 px-3 rounded-lg bg-muted hover:bg-muted transition text-sm">Export</button>
										</div>
									</div>
									<div className="mt-4 h-72">
										<ResponsiveContainer width="100%" height="100%">
											<LineChart data={analyticsData}>
												<CartesianGrid strokeDasharray="3 3" stroke="rgba(2,6,23,0.06)" />
												<XAxis dataKey="month" stroke="rgba(2,6,23,0.45)" />
												<YAxis stroke="rgba(2,6,23,0.45)" />
												<ReTooltip contentStyle={{ background: 'rgba(255,255,255,0.98)', color: 'rgba(2,6,23,0.9)', border: '1px solid rgba(2,6,23,0.06)', borderRadius: 12 }} />
												<Line type="monotone" dataKey="visits" stroke="hsl(var(--accent))" strokeWidth={2} dot={false} />
												<Line type="monotone" dataKey="conversions" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
											</LineChart>
										</ResponsiveContainer>
									</div>
								</GlassCard>

								<GlassCard>
									<h2 className="text-lg font-semibold">Conversions by Month</h2>
									<div className="mt-4 h-64">
										<ResponsiveContainer width="100%" height="100%">
											<BarChart data={analyticsData}>
												<CartesianGrid strokeDasharray="3 3" stroke="rgba(2,6,23,0.06)" />
												<XAxis dataKey="month" stroke="rgba(2,6,23,0.45)" />
												<YAxis stroke="rgba(2,6,23,0.45)" />
												<ReTooltip contentStyle={{ background: 'rgba(255,255,255,0.98)', color: 'rgba(2,6,23,0.9)', border: '1px solid rgba(2,6,23,0.06)', borderRadius: 12 }} />
												<Bar dataKey="conversions" fill="hsl(var(--primary))" radius={[8,8,0,0]} />
											</BarChart>
										</ResponsiveContainer>
									</div>
								</GlassCard>
							</div>

							<div className="space-y-6">
								<GlassCard>
									<div className="flex items-center justify-between">
										<h2 className="text-lg font-semibold">Recent Activity</h2>
										<button className="text-sm text-muted-foreground hover:text-foreground">View all</button>
									</div>
									<ul className="mt-4 space-y-3">
										{activity.map(item => (
											<li key={item.id} className="flex items-center justify-between rounded-lg hover:bg-white/5 transition p-2">
												<span className="text-sm">{item.text}</span>
												<span className="text-xs text-muted-foreground">{item.time}</span>
											</li>
										))}
									</ul>
								</GlassCard>

								<GlassCard>
									<h2 className="text-lg font-semibold">Tasks</h2>
									<div className="mt-4 space-y-4">
										{tasks.map(task => (
											<div key={task.id} className="rounded-xl p-4 card-gradient border border-white/10">
												<div className="flex items-center justify-between">
													<p className="text-sm font-medium">{task.title}</p>
													<span className="text-xs text-muted-foreground">{task.progress}%</span>
												</div>
												<div className="mt-2 h-2 w-full rounded-full bg-white/10">
													<div className="h-2 rounded-full bg-gradient-to-r from-accent to-primary" style={{ width: `${task.progress}%` }} />
												</div>
											</div>
										))}
									</div>
								</GlassCard>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}

function GlassCard({ children }: { children: React.ReactNode }) {
	return (
		<motion.section
			initial={{ y: 8, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5, ease: 'easeOut' }}
			className="surface rounded-2xl p-5"
		>
			{children}
		</motion.section>
	)
}

function SidebarLink({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
	return (
		<button className={`w-full flex items-center gap-3 rounded-xl px-3 py-2 transition ${active ? 'bg-muted' : 'hover:bg-muted/80'}`}>
			<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
				{icon}
			</span>
			<span className="text-sm">{label}</span>
		</button>
	)
}

function SelectPill({ label }: { label: string }) {
	return (
		<button className="inline-flex items-center gap-2 rounded-full bg-muted hover:bg-muted/80 transition px-3 py-1.5 text-sm">
			<span className="h-2 w-2 rounded-full bg-primary" />
			{label}
		</button>
	)
}
