// Event Production Checklist App
class EventProductionChecklist {
    constructor() {
        this.data = {
            "phases": [
                {
                    "id": "pre_production",
                    "title": "Pre-Production Phase",
                    "timeline": "8-12 weeks before event",
                    "description": "Initial planning and strategy, documentation and contracts, and team assembly",
                    "tasks": [
                        {"id": "pp_1", "task": "Define event scope, budget, and timeline", "role": "Production Manager", "priority": "critical"},
                        {"id": "pp_2", "task": "Secure venue contracts and permits", "role": "Production Manager", "priority": "critical"},
                        {"id": "pp_3", "task": "Establish production team hierarchy", "role": "Production Manager", "priority": "high"},
                        {"id": "pp_4", "task": "Create master production schedule", "role": "Production Manager", "priority": "critical"},
                        {"id": "pp_5", "task": "Develop contingency plans for weather/emergencies", "role": "Production Manager", "priority": "high"},
                        {"id": "pp_6", "task": "Finalize technical rider requirements", "role": "Technical Director", "priority": "critical"},
                        {"id": "pp_7", "task": "Book key vendors and suppliers", "role": "Production Manager", "priority": "critical"},
                        {"id": "pp_8", "task": "Create production communication matrix", "role": "Production Manager", "priority": "high"},
                        {"id": "pp_9", "task": "Establish version control system for documents", "role": "Production Manager", "priority": "high"},
                        {"id": "pp_10", "task": "Set up project management tools", "role": "Production Manager", "priority": "medium"},
                        {"id": "pp_11", "task": "Create preliminary run-of-show outline", "role": "Stage Manager", "priority": "high"},
                        {"id": "pp_12", "task": "Establish crew roles and responsibilities", "role": "Production Manager", "priority": "high"},
                        {"id": "pp_13", "task": "Set up insurance and liability coverage", "role": "Production Manager", "priority": "critical"},
                        {"id": "pp_14", "task": "Create master contact database", "role": "Production Manager", "priority": "high"},
                        {"id": "pp_15", "task": "Develop production budget tracking system", "role": "Production Manager", "priority": "high"},
                        {"id": "pp_16", "task": "Schedule key production meetings", "role": "Production Manager", "priority": "medium"},
                        {"id": "pp_17", "task": "Create preliminary crew manifest", "role": "Production Manager", "priority": "medium"},
                        {"id": "pp_18", "task": "Establish catering and hospitality requirements", "role": "Production Manager", "priority": "medium"}
                    ]
                },
                {
                    "id": "technical_production",
                    "title": "Technical Production Phase",
                    "timeline": "4-8 weeks before event",
                    "description": "Audio/visual systems, staging and set design, and power and infrastructure requirements",
                    "tasks": [
                        {"id": "tp_1", "task": "Finalize audio system design and specifications", "role": "Technical Director", "priority": "critical"},
                        {"id": "tp_2", "task": "Complete lighting plot and equipment list", "role": "Technical Director", "priority": "critical"},
                        {"id": "tp_3", "task": "Confirm video/projection requirements", "role": "Technical Director", "priority": "critical"},
                        {"id": "tp_4", "task": "Finalize staging and set design", "role": "Technical Director", "priority": "critical"},
                        {"id": "tp_5", "task": "Calculate power requirements and distribution", "role": "Technical Director", "priority": "critical"},
                        {"id": "tp_6", "task": "Create technical equipment inventory", "role": "Technical Director", "priority": "high"},
                        {"id": "tp_7", "task": "Schedule technical rehearsals", "role": "Technical Director", "priority": "high"},
                        {"id": "tp_8", "task": "Coordinate with venue technical staff", "role": "Technical Director", "priority": "high"},
                        {"id": "tp_9", "task": "Finalize rigging and safety plans", "role": "Technical Director", "priority": "critical"},
                        {"id": "tp_10", "task": "Test all equipment and backup systems", "role": "Technical Director", "priority": "critical"},
                        {"id": "tp_11", "task": "Create technical cue sheets", "role": "Technical Director", "priority": "high"},
                        {"id": "tp_12", "task": "Establish equipment transportation plan", "role": "Technical Director", "priority": "high"},
                        {"id": "tp_13", "task": "Prepare technical crew briefing materials", "role": "Technical Director", "priority": "medium"},
                        {"id": "tp_14", "task": "Set up monitoring and communication systems", "role": "Technical Director", "priority": "high"},
                        {"id": "tp_15", "task": "Create emergency technical procedures", "role": "Technical Director", "priority": "high"},
                        {"id": "tp_16", "task": "Finalize cable runs and infrastructure", "role": "Technical Director", "priority": "high"},
                        {"id": "tp_17", "task": "Schedule equipment delivery and setup", "role": "Technical Director", "priority": "high"},
                        {"id": "tp_18", "task": "Prepare technical strike plan", "role": "Technical Director", "priority": "medium"}
                    ]
                },
                {
                    "id": "crew_coordination",
                    "title": "Crew Coordination & Scheduling",
                    "timeline": "2-4 weeks before event",
                    "description": "Crew management, schedule optimization, and logistics coordination",
                    "tasks": [
                        {"id": "cc_1", "task": "Finalize crew call times and positions", "role": "Stage Manager", "priority": "critical"},
                        {"id": "cc_2", "task": "Create and distribute crew call sheets", "role": "Stage Manager", "priority": "critical"},
                        {"id": "cc_3", "task": "Establish crew communication protocols", "role": "Stage Manager", "priority": "high"},
                        {"id": "cc_4", "task": "Coordinate crew transportation and parking", "role": "Stage Manager", "priority": "high"},
                        {"id": "cc_5", "task": "Set up crew check-in procedures", "role": "Stage Manager", "priority": "high"},
                        {"id": "cc_6", "task": "Create crew meal schedules", "role": "Stage Manager", "priority": "medium"},
                        {"id": "cc_7", "task": "Establish crew safety briefing protocols", "role": "Stage Manager", "priority": "critical"},
                        {"id": "cc_8", "task": "Prepare crew identification and credentials", "role": "Stage Manager", "priority": "high"},
                        {"id": "cc_9", "task": "Set up crew rest areas and facilities", "role": "Stage Manager", "priority": "medium"},
                        {"id": "cc_10", "task": "Create crew emergency contact lists", "role": "Stage Manager", "priority": "high"},
                        {"id": "cc_11", "task": "Establish crew accountability systems", "role": "Stage Manager", "priority": "high"},
                        {"id": "cc_12", "task": "Coordinate with union representatives", "role": "Stage Manager", "priority": "high"},
                        {"id": "cc_13", "task": "Set up crew equipment and tool distribution", "role": "Stage Manager", "priority": "medium"},
                        {"id": "cc_14", "task": "Create crew overtime and scheduling policies", "role": "Stage Manager", "priority": "medium"},
                        {"id": "cc_15", "task": "Establish crew performance evaluation system", "role": "Stage Manager", "priority": "low"},
                        {"id": "cc_16", "task": "Coordinate crew housing if required", "role": "Stage Manager", "priority": "medium"},
                        {"id": "cc_17", "task": "Set up crew expense tracking system", "role": "Stage Manager", "priority": "low"},
                        {"id": "cc_18", "task": "Prepare crew departure and checkout procedures", "role": "Stage Manager", "priority": "medium"}
                    ]
                },
                {
                    "id": "show_day",
                    "title": "Show Day Execution & Post-Production",
                    "timeline": "Event day and immediate aftermath",
                    "description": "Load-in through final wrap-up, emphasizing real-time coordination and systematic documentation",
                    "tasks": [
                        {"id": "sd_1", "task": "Conduct pre-show safety briefing", "role": "Stage Manager", "priority": "critical"},
                        {"id": "sd_2", "task": "Complete load-in and equipment setup", "role": "Technical Director", "priority": "critical"},
                        {"id": "sd_3", "task": "Execute sound and lighting checks", "role": "Technical Director", "priority": "critical"},
                        {"id": "sd_4", "task": "Confirm all crew positions and readiness", "role": "Stage Manager", "priority": "critical"},
                        {"id": "sd_5", "task": "Test all communication systems", "role": "Stage Manager", "priority": "critical"},
                        {"id": "sd_6", "task": "Conduct final technical rehearsal", "role": "Technical Director", "priority": "critical"},
                        {"id": "sd_7", "task": "Brief all department heads", "role": "Production Manager", "priority": "critical"},
                        {"id": "sd_8", "task": "Activate emergency response protocols", "role": "Production Manager", "priority": "critical"},
                        {"id": "sd_9", "task": "Monitor real-time crew coordination", "role": "Stage Manager", "priority": "critical"},
                        {"id": "sd_10", "task": "Execute run-of-show timeline", "role": "Stage Manager", "priority": "critical"},
                        {"id": "sd_11", "task": "Coordinate intermission activities", "role": "Stage Manager", "priority": "high"},
                        {"id": "sd_12", "task": "Manage real-time schedule changes", "role": "Stage Manager", "priority": "high"},
                        {"id": "sd_13", "task": "Document any technical issues", "role": "Technical Director", "priority": "high"},
                        {"id": "sd_14", "task": "Coordinate post-show strike activities", "role": "Technical Director", "priority": "critical"},
                        {"id": "sd_15", "task": "Supervise equipment load-out", "role": "Technical Director", "priority": "critical"},
                        {"id": "sd_16", "task": "Conduct crew checkout and dismissal", "role": "Stage Manager", "priority": "high"},
                        {"id": "sd_17", "task": "Complete venue restoration", "role": "Production Manager", "priority": "critical"},
                        {"id": "sd_18", "task": "Finalize equipment returns and inventory", "role": "Technical Director", "priority": "high"},
                        {"id": "sd_19", "task": "Process crew timesheets and expenses", "role": "Production Manager", "priority": "medium"},
                        {"id": "sd_20", "task": "Conduct post-event debrief meeting", "role": "Production Manager", "priority": "medium"},
                        {"id": "sd_21", "task": "Document lessons learned and improvements", "role": "Production Manager", "priority": "medium"},
                        {"id": "sd_22", "task": "Archive production documents", "role": "Production Manager", "priority": "low"},
                        {"id": "sd_23", "task": "Submit final production report", "role": "Production Manager", "priority": "medium"},
                        {"id": "sd_24", "task": "Close vendor accounts and final payments", "role": "Production Manager", "priority": "medium"}
                    ]
                }
            ],
            "emergency_protocols": [
                {"id": "ep_1", "protocol": "Weather Emergency Procedures", "description": "Immediate evacuation and shelter protocols"},
                {"id": "ep_2", "protocol": "Equipment Failure Response", "description": "Backup systems activation and contingency plans"},
                {"id": "ep_3", "protocol": "Medical Emergency Response", "description": "First aid and emergency services coordination"},
                {"id": "ep_4", "protocol": "Communication System Backup", "description": "Alternative communication methods and protocols"},
                {"id": "ep_5", "protocol": "Power Failure Procedures", "description": "Generator activation and power restoration steps"},
                {"id": "ep_6", "protocol": "Security Incident Response", "description": "Threat assessment and security coordination"}
            ]
        };
        
        this.completedTasks = new Set();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.renderPhases();
        this.renderEmergencyProtocols();
        this.setupEventListeners();
        this.updateProgress();
    }

    setupEventListeners() {
        // Role filter
        document.getElementById('role-filter').addEventListener('change', (e) => {
            this.currentFilter = e.target.value;
            this.filterTasks();
        });

        // Export button
        document.getElementById('export-btn').addEventListener('click', () => {
            this.showExportModal();
        });

        // Reset progress button
        document.getElementById('reset-progress').addEventListener('click', () => {
            this.resetProgress();
        });

        // Emergency protocols toggle
        document.getElementById('toggle-emergency').addEventListener('click', () => {
            this.toggleEmergencyProtocols();
        });

        // Export modal actions
        document.getElementById('close-export-modal').addEventListener('click', () => {
            this.hideExportModal();
        });

        document.getElementById('copy-report').addEventListener('click', () => {
            this.copyReport();
        });

        document.getElementById('download-report').addEventListener('click', () => {
            this.downloadReport();
        });

        // Close modal when clicking outside
        document.getElementById('export-modal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                this.hideExportModal();
            }
        });
    }

    renderPhases() {
        const container = document.getElementById('phases-container');
        container.innerHTML = '';

        this.data.phases.forEach(phase => {
            const phaseCard = this.createPhaseCard(phase);
            container.appendChild(phaseCard);
        });
    }

    createPhaseCard(phase) {
        const card = document.createElement('div');
        card.className = 'phase-card';
        card.innerHTML = `
            <div class="phase-header" data-phase="${phase.id}">
                <div class="phase-info">
                    <h3 class="phase-title">${phase.title}</h3>
                    <div class="phase-timeline">${phase.timeline}</div>
                    <div class="phase-description">${phase.description}</div>
                    <div class="phase-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" id="progress-${phase.id}"></div>
                        </div>
                        <span class="progress-text" id="progress-text-${phase.id}">0%</span>
                    </div>
                </div>
                <div class="phase-controls">
                    <span class="expand-icon">▼</span>
                </div>
            </div>
            <div class="phase-content">
                <div class="task-list" id="tasks-${phase.id}">
                    ${phase.tasks.map(task => this.createTaskItem(task)).join('')}
                </div>
            </div>
        `;

        // Add click listener to phase header
        card.querySelector('.phase-header').addEventListener('click', () => {
            this.togglePhase(card, phase.id);
        });

        // Add click listeners to task checkboxes
        card.querySelectorAll('.task-checkbox').forEach(checkbox => {
            checkbox.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleTask(checkbox.dataset.taskId, checkbox);
            });
        });

        return card;
    }

    createTaskItem(task) {
        const roleClass = task.role.toLowerCase().replace(/\s+/g, '-');
        const isCompleted = this.completedTasks.has(task.id);
        
        return `
            <div class="task-item ${isCompleted ? 'completed' : ''}" data-role="${task.role}">
                <div class="task-checkbox ${isCompleted ? 'checked' : ''}" data-task-id="${task.id}"></div>
                <div class="task-content">
                    <div class="task-text">${task.task}</div>
                    <div class="task-meta">
                        <span class="task-role ${roleClass}">${task.role}</span>
                        <span class="task-priority ${task.priority}">${task.priority}</span>
                    </div>
                </div>
            </div>
        `;
    }

    togglePhase(card, phaseId) {
        card.classList.toggle('expanded');
        this.updatePhaseProgress(phaseId);
    }

    toggleTask(taskId, checkbox) {
        const taskItem = checkbox.closest('.task-item');
        
        if (this.completedTasks.has(taskId)) {
            this.completedTasks.delete(taskId);
            checkbox.classList.remove('checked');
            taskItem.classList.remove('completed');
        } else {
            this.completedTasks.add(taskId);
            checkbox.classList.add('checked');
            taskItem.classList.add('completed');
        }
        
        this.updateProgress();
    }

    updateProgress() {
        const totalTasks = this.getTotalTasks();
        const completedCount = this.completedTasks.size;
        const overallProgress = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

        // Update overall progress
        document.getElementById('overall-progress-fill').style.width = `${overallProgress}%`;
        document.getElementById('overall-progress-text').textContent = `${overallProgress}%`;

        // Update footer stats
        document.getElementById('completed-tasks').textContent = completedCount;
        document.getElementById('remaining-tasks').textContent = totalTasks - completedCount;

        // Update phase progress
        this.data.phases.forEach(phase => {
            this.updatePhaseProgress(phase.id);
        });
    }

    updatePhaseProgress(phaseId) {
        const phase = this.data.phases.find(p => p.id === phaseId);
        if (!phase) return;

        const phaseTasks = phase.tasks;
        const phaseCompletedCount = phaseTasks.filter(task => this.completedTasks.has(task.id)).length;
        const phaseProgress = phaseTasks.length > 0 ? Math.round((phaseCompletedCount / phaseTasks.length) * 100) : 0;

        const progressFill = document.getElementById(`progress-${phaseId}`);
        const progressText = document.getElementById(`progress-text-${phaseId}`);
        
        if (progressFill) progressFill.style.width = `${phaseProgress}%`;
        if (progressText) progressText.textContent = `${phaseProgress}%`;
    }

    getTotalTasks() {
        return this.data.phases.reduce((total, phase) => total + phase.tasks.length, 0);
    }

    filterTasks() {
        const allTasks = document.querySelectorAll('.task-item');
        
        allTasks.forEach(task => {
            const taskRole = task.dataset.role;
            if (this.currentFilter === 'all' || taskRole === this.currentFilter) {
                task.classList.remove('hidden');
            } else {
                task.classList.add('hidden');
            }
        });
    }

    renderEmergencyProtocols() {
        const container = document.getElementById('emergency-content');
        container.innerHTML = this.data.emergency_protocols.map(protocol => `
            <div class="protocol-item">
                <div class="protocol-title">${protocol.protocol}</div>
                <div class="protocol-description">${protocol.description}</div>
            </div>
        `).join('');
    }

    toggleEmergencyProtocols() {
        const content = document.getElementById('emergency-content');
        const toggleBtn = document.getElementById('toggle-emergency');
        const toggleText = toggleBtn.querySelector('.toggle-text');
        
        content.classList.toggle('expanded');
        toggleText.textContent = content.classList.contains('expanded') ? 'Hide' : 'Show';
    }

    showExportModal() {
        const modal = document.getElementById('export-modal');
        const content = document.getElementById('export-content');
        
        content.value = this.generateProgressReport();
        modal.classList.add('active');
    }

    hideExportModal() {
        const modal = document.getElementById('export-modal');
        modal.classList.remove('active');
    }

    generateProgressReport() {
        const totalTasks = this.getTotalTasks();
        const completedCount = this.completedTasks.size;
        const overallProgress = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
        
        let report = `EVENT PRODUCTION CHECKLIST - PROGRESS REPORT\n`;
        report += `Generated: ${new Date().toLocaleString()}\n\n`;
        report += `OVERALL PROGRESS: ${overallProgress}% (${completedCount}/${totalTasks} tasks completed)\n\n`;
        
        this.data.phases.forEach(phase => {
            const phaseTasks = phase.tasks;
            const phaseCompletedCount = phaseTasks.filter(task => this.completedTasks.has(task.id)).length;
            const phaseProgress = phaseTasks.length > 0 ? Math.round((phaseCompletedCount / phaseTasks.length) * 100) : 0;
            
            report += `${phase.title.toUpperCase()}\n`;
            report += `Progress: ${phaseProgress}% (${phaseCompletedCount}/${phaseTasks.length})\n`;
            report += `Timeline: ${phase.timeline}\n\n`;
            
            report += `COMPLETED TASKS:\n`;
            const completedTasks = phaseTasks.filter(task => this.completedTasks.has(task.id));
            if (completedTasks.length > 0) {
                completedTasks.forEach(task => {
                    report += `✓ ${task.task} (${task.role} - ${task.priority})\n`;
                });
            } else {
                report += `No tasks completed yet.\n`;
            }
            
            report += `\nPENDING TASKS:\n`;
            const pendingTasks = phaseTasks.filter(task => !this.completedTasks.has(task.id));
            if (pendingTasks.length > 0) {
                pendingTasks.forEach(task => {
                    report += `○ ${task.task} (${task.role} - ${task.priority})\n`;
                });
            } else {
                report += `All tasks completed!\n`;
            }
            
            report += `\n${'='.repeat(50)}\n\n`;
        });
        
        return report;
    }

    copyReport() {
        const content = document.getElementById('export-content');
        content.select();
        document.execCommand('copy');
        
        // Show feedback
        const copyBtn = document.getElementById('copy-report');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('btn--primary');
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('btn--primary');
        }, 2000);
    }

    downloadReport() {
        const content = document.getElementById('export-content').value;
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `event-production-checklist-${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
            this.completedTasks.clear();
            
            // Reset all visual elements
            document.querySelectorAll('.task-checkbox').forEach(checkbox => {
                checkbox.classList.remove('checked');
            });
            
            document.querySelectorAll('.task-item').forEach(item => {
                item.classList.remove('completed');
            });
            
            this.updateProgress();
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EventProductionChecklist();
});