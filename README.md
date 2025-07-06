# Event Production Checklist

A comprehensive web-based task management system designed specifically for professional event production teams. This application helps Production Managers, Stage Managers, and Technical Directors track and coordinate all aspects of event production from pre-production through post-event wrap-up.

## Features

### 🎯 **Production Phase Management**
- **Pre-Production Phase** (8-12 weeks before event)
- **Technical Production Phase** (4-8 weeks before event)  
- **Crew Coordination & Scheduling** (2-4 weeks before event)
- **Show Day Execution & Post-Production** (event day and aftermath)

### 👥 **Role-Based Task Management**
- Filter tasks by role: Production Manager, Stage Manager, Technical Director
- Priority-based task organization (Critical, High, Medium, Low)
- Real-time progress tracking with visual indicators

### 📊 **Progress Tracking & Analytics**
- Overall completion percentage
- Phase-specific progress tracking
- Task completion statistics
- Visual progress bars and indicators

### 📋 **Export & Reporting**
- Export progress reports in multiple formats
- Copy reports to clipboard
- Download detailed task completion reports
- Track completed vs. remaining tasks

### 🚨 **Emergency Protocols**
- Built-in emergency response procedures
- Weather emergency protocols
- Equipment failure response plans
- Medical emergency procedures
- Communication system backups

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Data**: JSON-based task and protocol storage
- **Styling**: Modern CSS with responsive design
- **No Dependencies**: Pure web technologies, no build process required

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/event-production-checklist.git
   cd event-production-checklist
   ```

2. **Open in a web browser:**
   ```bash
   # Option 1: Open directly
   open index.html
   
   # Option 2: Use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## Usage

### Getting Started
1. Open the application in your web browser
2. Review the four main production phases
3. Use the role filter to view tasks specific to your position
4. Check off completed tasks as you progress through production

### Role-Based Workflow
- **Production Manager**: Focus on budgets, contracts, vendor management, and overall coordination
- **Stage Manager**: Handle crew coordination, scheduling, and show day execution
- **Technical Director**: Manage audio/visual systems, equipment, and technical requirements

### Progress Tracking
- Monitor overall completion percentage in the header
- View phase-specific progress indicators
- Track total tasks completed vs. remaining
- Export progress reports for stakeholders

### Emergency Protocols
- Click "Show" in the Emergency Protocols section
- Review procedures for various emergency scenarios
- Keep protocols easily accessible during events

## File Structure

```
event-production-checklist/
├── index.html              # Main application interface
├── style.css              # Application styling
├── app.js                 # Core application logic
├── checklist_data.json    # Task and protocol data
└── README.md             # This file
```

## Customization

### Adding New Tasks
Edit `checklist_data.json` to add new tasks to any phase:

```json
{
  "id": "new_task_id",
  "task": "Description of the new task",
  "role": "Production Manager",
  "priority": "high"
}
```

### Adding New Phases
Extend the phases array in `checklist_data.json` with new production phases as needed.

### Modifying Emergency Protocols
Update the `emergency_protocols` section in `checklist_data.json` to add or modify emergency procedures.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Maintain vanilla JavaScript (no frameworks)
- Follow existing code style and structure
- Test all features across modern browsers
- Update documentation for new features

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Designed for professional event production teams
- Inspired by industry-standard production management practices
- Built with accessibility and usability in mind

## Support

For questions, issues, or feature requests, please:
1. Check existing [Issues](https://github.com/yourusername/event-production-checklist/issues)
2. Create a new issue with detailed information
3. Tag issues appropriately (bug, enhancement, question)

---

**Built for the event production community** 🎭🎪🎨 